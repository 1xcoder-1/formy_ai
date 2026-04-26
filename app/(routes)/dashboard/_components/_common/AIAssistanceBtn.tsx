"use client";
import { FormBlockInstance } from "@/@types/form-block.type";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useBuilder } from "@/context/builder-provider";
import { toast } from "@/hooks/use-toast";
import { generateAIPrompt } from "@/actions/ai.action";
import { generateUniqueId } from "@/lib/helper";
import { generateFormQuestionPrompt } from "@/lib/prompts";
import { Loader, Sparkles, X } from "lucide-react";
import React, { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const AIAssistanceBtn = () => {
  const { formData, blockLayouts, setBlockLayouts, handleSeletedLayout } =
    useBuilder();
  const isMobile = useIsMobile();
  const [userRequest, setUserRequest] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  const isPublished = formData?.published;

  const onOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open && isMobile) {
      handleSeletedLayout(null); // Close right sidebar on mobile
    }
  };

  const GenerateFormQuestionsWithAI = async () => {
    if (!userRequest) {
      toast({
        title: "Please enter a request",
      });
      return;
    }
    try {
      setLoading(true);
      const formName = formData?.name || "";
      const formDescription = formData?.description || "";

      const PROMPT = generateFormQuestionPrompt(
        userRequest,
        formName,
        formDescription,
        blockLayouts
      );

      const result = await generateAIPrompt(PROMPT);

      if (!result.success || !result.data) {
        throw new Error(result.message || "Failed to generate AI response");
      }

      const parsedResponse = JSON?.parse(result.data);
      const actionType = parsedResponse.actionType;
      const generatedBlocks = parsedResponse.blocks;
      const addUniqueIdToGeneratedBlocks = addUniqueIds(generatedBlocks);

      setBlockLayouts((prevBlocks) => {
        if (actionType === "addQuestions") {
          return [...prevBlocks, ...addUniqueIdToGeneratedBlocks];
        } else if (actionType === "createForm") {
          return [...addUniqueIdToGeneratedBlocks];
        } else {
          console.warn(`Unhandled actionType: ${actionType}`);
          return prevBlocks;
        }
      });
      setIsOpen(false);
      setUserRequest("");
    } catch (error) {
      console.log(error, "error");
      toast({
        title: "Failed to generate summary",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  function addUniqueIds(blocks: FormBlockInstance[]) {
    blocks.forEach((block) => {
      block.id = generateUniqueId();
      block?.childblocks?.forEach((child) => {
        child.id = generateUniqueId();
      });
    });
    return blocks;
  }

  const content = (
    <div
      className="
    flex flex-col  
    w-full max-w-[650px] bg-white 
    rounded-lg px-2 sm:px-5 pb-[14px] pt-[18px]
    "
    >
      <div className="flex relative items-center justify-between border-b border-gray-200 pb-2">
        <div className="flex space-x-6 -mb-px">
          <span className="inline-flex items-center px-1 pb-2 text-xs font-semibold text-primary border-b-2 border-primary">
            Ask to generate form or questions
          </span>
        </div>
      </div>

      <div className="mt-[22px]">
        <Textarea
          value={userRequest}
          rows={4}
          readOnly={isPublished}
          className="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md focus:ring-primary h-32"
          placeholder="Describe the form or questions you want to generate with AI..."
          spellCheck="false"
          onChange={(e) => setUserRequest(e.target.value)}
        />
      </div>

      <div className="flex justify-between items-center mt-4">
        <div
          role="button"
          className="text-primary font-medium underline text-sm ml-1 hover:text-primary/80 transition-colors"
          onClick={() => setShow(!show)}
        >
          {show ? "Hide tips" : "Tips"}
        </div>

        <Button
          type="button"
          size="sm"
          className="px-4 py-2 font-semibold shadow-md active:scale-95 transition-all"
          disabled={loading || isPublished}
          onClick={GenerateFormQuestionsWithAI}
        >
          {loading ? (
            <Loader size={18} className="animate-spin mr-2" />
          ) : (
            <Sparkles className="w-4 h-4 mr-2" />
          )}
          Generate
        </Button>
      </div>

      {show && (
        <div className="flex flex-col rounded-lg border border-primary/20 bg-primary/5 text-primary/80 px-3 py-3 mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="font-bold text-sm mb-2">Let the AI know:</div>
          <ul className="list-disc ml-5 text-sm space-y-1">
            <li>Type of form (e.g., Hotel Booking)</li>
            <li>Information to collect (e.g., name, date)</li>
            <li>Desired tone (e.g., formal)</li>
            <li>Number of questions</li>
          </ul>
        </div>
      )}
    </div>
  );

  if (isMobile) {
    return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogTrigger asChild>
          <Button
            size="icon"
            className="rounded-lg !bg-primary/20 border-none p-4 shadow-sm active:scale-90 transition-all"
            aria-label="AI assistance"
          >
            <Sparkles className="w-8 h-8 text-primary" />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[95%] max-w-[650px] p-2 rounded-xl">
          <DialogHeader className="hidden">
            <DialogTitle>AI Assistance</DialogTitle>
          </DialogHeader>
          {content}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Popover open={isOpen} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button
          size="icon"
          className="rounded-lg !bg-primary/20 border-none p-4 shadow-sm hover:scale-105 transition-all"
          aria-label="AI assistance"
        >
          <Sparkles className="w-8 h-8 text-primary" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0 border-none shadow-2xl rounded-xl overflow-hidden"
        forceMount
        align="start"
        side="right"
      >
        <div className="border-2 border-primary/10 rounded-xl bg-white">
          {content}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AIAssistanceBtn;
