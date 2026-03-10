"use client";
import React, { useState, useEffect } from "react";
import { useBuilder } from "@/context/builder-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { updateFormSettings, saveForm, deleteForm } from "@/actions/form.action";
import { toast } from "@/hooks/use-toast";
import { Check, Loader2, Trash2, Palette, Settings2, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import { defaultBackgroundColor, defaultPrimaryColor } from "@/constant";

const FormSettingsDetailed = () => {
  const { formData, updateSettings } = useBuilder();
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const router = useRouter();

  // Local state for form fields
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [bgPicker, setBgPicker] = useState(defaultBackgroundColor);
  const [primaryPicker, setPrimaryPicker] = useState(defaultPrimaryColor);

  useEffect(() => {
    if (formData) {
      setName(formData.name || "");
      setDescription(formData.description || "");
      setBgPicker(formData.settings?.backgroundColor || defaultBackgroundColor);
      setPrimaryPicker(formData.settings?.primaryColor || defaultPrimaryColor);
    }
  }, [formData]);

  const handleUpdateGeneral = async () => {
    if (!formData?.formId) return;
    setLoading(true);
    try {
      const res = await saveForm({
        formId: formData.formId,
        name,
        description,
        jsonBlocks: formData.jsonBlocks
      });
      if (res.success) {
        toast({ title: "Updated", description: "General settings saved." });
      }
    } catch (e) {
      toast({ title: "Error", description: "Failed to save settings.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateAppearance = async () => {
    if (!formData?.formId) return;
    setLoading(true);
    try {
      const res = await updateFormSettings({
        formId: formData.formId,
        backgroundColor: bgPicker,
        primaryColor: primaryPicker
      });
      if (res.success) {
        updateSettings({ backgroundColor: bgPicker, primaryColor: primaryPicker });
        toast({ title: "Updated", description: "Appearance settings saved." });
      }
    } catch (e) {
      toast({ title: "Error", description: "Failed to save appearance.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!formData?.formId) return;
    setDeleteLoading(true);
    try {
      const res = await deleteForm(formData.formId);
      if (res.success) {
        toast({ title: "Deleted", description: "Form deleted successfully." });
        router.push("/dashboard");
      }
    } catch (e) {
      toast({ title: "Error", description: "Failed to delete form.", variant: "destructive" });
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 pb-20">
      {/* General Settings */}
      <section className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 shadow-sm">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-2xl">
            <Settings2 size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">General Information</h3>
            <p className="text-sm text-gray-500">Update your form name and description</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="form-name" className="text-base font-semibold">Form Name</Label>
            <Input 
              id="form-name" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter form name..."
              className="h-12 text-base"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="form-desc" className="text-base font-semibold">Description</Label>
            <Textarea 
              id="form-desc" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What is this form about?"
              rows={4}
              className="text-base resize-none"
            />
          </div>
          <Button 
            onClick={handleUpdateGeneral} 
            disabled={loading}
            className="w-full sm:w-auto h-11 px-8 bg-primary hover:bg-primary/90"
          >
            {loading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : <Check className="mr-2 h-4 w-4" />}
            Save Changes
          </Button>
        </div>
      </section>

      {/* Appearance Settings */}
      <section className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 shadow-sm">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-purple-50 dark:bg-purple-900/20 text-purple-600 rounded-2xl">
            <Palette size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Appearance</h3>
            <p className="text-sm text-gray-500">Pick consistent brand colors for your form</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <Label className="text-base font-semibold">Background Color</Label>
            <div className="flex items-center gap-6 p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700">
              <input 
                type="color" 
                value={bgPicker} 
                onChange={(e) => setBgPicker(e.target.value)}
                className="h-12 w-20 rounded-xl cursor-pointer border-none bg-transparent"
              />
              <div className="flex flex-col">
                 <span className="text-sm font-mono text-gray-500 uppercase font-bold">{bgPicker}</span>
                 <span className="text-xs text-gray-400">Page background</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <Label className="text-base font-semibold">Primary Brand Color</Label>
            <div className="flex items-center gap-6 p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700">
              <input 
                type="color" 
                value={primaryPicker} 
                onChange={(e) => setPrimaryPicker(e.target.value)}
                className="h-12 w-20 rounded-xl cursor-pointer border-none bg-transparent"
              />
              <div className="flex flex-col">
                 <span className="text-sm font-mono text-gray-500 uppercase font-bold">{primaryPicker}</span>
                 <span className="text-xs text-gray-400">Buttons & Accents</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button 
                onClick={handleUpdateAppearance} 
                disabled={loading}
                className="h-11 px-8"
            >
                {loading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : <Palette className="mr-2 h-4 w-4" />}
                Save Appearance
            </Button>
            <Button 
                variant="outline"
                className="h-11 px-8"
                onClick={async () => {
                   setBgPicker(defaultBackgroundColor);
                   setPrimaryPicker(defaultPrimaryColor);
                   // Instantly save to DB
                   if (formData?.formId) {
                       setLoading(true);
                       try {
                           const res = await updateFormSettings({
                               formId: formData.formId,
                               backgroundColor: defaultBackgroundColor,
                               primaryColor: defaultPrimaryColor
                           });
                           if (res.success) {
                               updateSettings({ backgroundColor: defaultBackgroundColor, primaryColor: defaultPrimaryColor });
                               toast({ title: "Reset", description: "Appearance reset to defaults." });
                           }
                       } catch (e) {
                           toast({ title: "Error", description: "Failed to reset appearance.", variant: "destructive" });
                       } finally {
                           setLoading(false);
                       }
                   }
                }}
            >
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset Defaults
            </Button>
        </div>
      </section>

      {/* Danger Zone */}
      <section className="bg-red-50/30 dark:bg-red-900/5 border border-red-100 dark:border-red-900/20 rounded-3xl p-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-2xl">
            <Trash2 size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-red-600 dark:text-red-400">Danger Zone</h3>
            <p className="text-sm text-gray-500">Permanently delete your form and data</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-white dark:bg-gray-900 border border-red-100 dark:border-red-900/20 rounded-2xl">
          <div className="text-center md:text-left">
            <h5 className="font-bold text-gray-900 dark:text-gray-100">Delete this form permanently</h5>
            <p className="text-sm text-gray-500 mt-1">This action is irreversible and will delete all collected responses.</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive" className="h-11 px-8">
                Delete Form
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-red-600">Are you sure?</DialogTitle>
                <DialogDescription className="text-base pt-2">
                  This will permanently delete <b className="text-gray-900 dark:text-white">&quot;{formData?.name}&quot;</b>. 
                  You will lose all data and configurations associated with this form.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="mt-8 flex gap-3">
                <DialogClose asChild>
                   <Button variant="outline" className="flex-1 h-11">Keep Form</Button>
                </DialogClose>
                <Button 
                  onClick={handleDelete}
                  disabled={deleteLoading}
                  variant="destructive"
                  className="flex-1 h-11"
                >
                  {deleteLoading ? <Loader2 className="animate-spin h-4 w-4" /> : "Yes, Delete Forever"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </div>
  );
};

export default FormSettingsDetailed;
