import { fetchPublishFormById } from "@/actions/form.action";
import React from "react";
import NotAvaliable from "../../_components/NotAvaliable";
import { FormBlockInstance } from "@/@types/form-block.type";
import FormSubmitComponent from "../../_components/FormSubmitComponent";

const Page = async ({ params }: { params: { formId: string } }) => {
  const { formId } = params;

  const result = await fetchPublishFormById(formId);
  
  if (!result.success || !result.form) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50/50 dark:bg-gray-950 px-4">
        <div className="max-w-md w-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800/50 shadow-2xl rounded-3xl p-8 text-center">
          <div className="w-16 h-16 bg-amber-50 dark:bg-amber-900/10 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Form Unavailable</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
            {result.message || "This form is not accepting responses at the moment."}
          </p>
          <div className="text-xs text-gray-400 font-medium">Powered by Formy.ai</div>
        </div>
      </div>
    );
  }

  const { form } = result;

  const blocks = JSON.parse(form.jsonBlocks) as FormBlockInstance[];
  return (
    <FormSubmitComponent
      formId={formId}
      blocks={blocks}
      bannerImage={(form.settings as any)?.bannerImage}
      primaryColor={form.settings.primaryColor}
      backgroundColor={form.settings.backgroundColor}
    />
  );
};

export default Page;
