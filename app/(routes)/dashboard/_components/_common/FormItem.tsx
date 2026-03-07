"use client";
import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ActivityIcon,
  EllipsisIcon,
  Globe,
  LockKeyholeIcon,
  MessageSquare,
  Trash2,
  Edit2,
  BarChart2,
  ExternalLink,
  Loader2,
} from "lucide-react";
import { formatDistanceToNowStrict } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { deleteForm } from "@/actions/form.action";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

type PropsType = {
  id: number;
  formId: string;
  name: string;
  responses: number;
  views: number;
  createdAt: Date;
  published: boolean;
  backgroundColor: string;
};
const FormItem = (props: PropsType) => {
  const {
    id,
    formId,
    name,
    published,
    createdAt,
    responses = 0,
    views = 0,
  } = props;

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onClick = useCallback(() => {
    router.push(`/dashboard/form/builder/${formId}`);
  }, [formId, router]);

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      setLoading(true);
      const res = await deleteForm(formId);
      if (res.success) {
        toast({
          title: "Success",
          description: "Form deleted successfully",
        });
        router.refresh();
      } else {
        toast({
          title: "Error",
          description: res.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      onClick={onClick}
      role="button"
      className="w-full h-auto group transition-all duration-300 hover:-translate-y-1"
    >
      <div
        className="w-full relative flex 
      items-center justify-center
      overflow-hidden h-[200px] rounded-t-2xl border border-gray-200
      bg-gradient-to-br from-primary/20 via-primary/5 to-white
      shadow-sm group-hover:shadow-md transition-all
      "
      >
        <div
          className=" w-44 absolute bottom-0 
                 flex items-center 
        flex-col
        px-4 pt-6
        h-40 rounded-t-2xl
         bg-white shadow-xl border border-gray-100/50"
        >
          <div className="w-full h-2 rounded-full bg-primary/20 mb-3" />
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="flex
             items-center
             gap-2 mb-3 w-full"
            >
              <Skeleton
                className="h-4 w-4 
              rounded-full shrink-0 bg-gray-100"
              />
              <Skeleton className="h-[12px] flex-1 bg-gray-100" />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full py-3 px-1">
        <div
          className="flex w-full items-center
         justify-between mb-2"
        >
          <span
            className="text-base flex items-center gap-2 font-bold text-gray-900 group-hover:text-primary transition-colors
                  "
          >
            {published ? (
              <div className="p-1 rounded-full bg-green-100">
                <Globe className="text-green-600 size-3" />
              </div>
            ) : (
              <div className="p-1 rounded-full bg-gray-100">
                <LockKeyholeIcon className="text-gray-500 size-3" />
              </div>
            )}
            <span className="truncate max-w-[180px]">{name}</span>
          </span>

          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="p-1.5 hover:bg-gray-100 rounded-full transition-colors h-8 w-8"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin text-primary" />
                ) : (
                  <EllipsisIcon className="text-gray-500 size-4" />
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/dashboard/form/builder/${formId}`);
                }}
                className="gap-2"
              >
                <Edit2 className="w-4 h-4" />
                Edit Form
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/dashboard/form/responds/${formId}`);
                }}
                className="gap-2"
              >
                <BarChart2 className="w-4 h-4" />
                View Responses
              </DropdownMenuItem>
              {published && (
                <DropdownMenuItem
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(`/public/submit-form/${formId}`, "_blank");
                  }}
                  className="gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open Live Form
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleDelete}
                disabled={loading}
                className="gap-2 text-red-600 focus:text-red-600 focus:bg-red-50"
              >
                <Trash2 className="w-4 h-4" />
                {loading ? "Deleting..." : "Delete Form"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div
          className="flex w-full border-t border-gray-100
        items-center justify-between pt-3
        "
        >
          <div className="flex items-center gap-4">
            <span
              className="text-gray-500 flex 
                      items-center gap-1.5 text-sm font-medium"
            >
              <MessageSquare
                className="text-gray-400 
              size-4"
              />
              {responses}
            </span>

            <span
              className="text-gray-500 
            flex items-center gap-1.5 text-sm font-medium"
            >
              <ActivityIcon
                className="text-gray-400
               size-4"
              />
              {views}
            </span>
          </div>
          <span
            className="text-gray-400 font-medium text-xs
                  "
          >
            {formatDistanceToNowStrict(new Date(createdAt), {
              addSuffix: true,
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FormItem;
