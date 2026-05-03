import React, { Suspense } from "react";
import { fetchAllForms, fetchFormStats } from "@/actions/form.action";
import StatsCards from "./_components/StatsCards";
import { Separator } from "@/components/ui/separator";
import CreateForm from "./_components/CreateForm";
import FormSkeleton from "./_components/_common/FormSkeleton";
import FormItem from "./_components/_common/FormItem";

const Dashboard = async () => {
  const stats = await fetchFormStats();
  const totalForms = stats.success ? (stats.totalForms ?? 0) : 0;

  return (
    <div className="w-full pt-8">
      <div className="w-full max-w-6xl mx-auto px-2 md:px-0 pt-1">
        {/* {FORM STATS} */}
        <section className="stats-section w-full">
          <div className="w-full flex items-center justify-between py-5">
            <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
            <CreateForm />
          </div>
          <StatsCards loading={false} data={stats} />
        </section>
        <div className="mt-10">
          <Separator className="!border-[#eee] !bg-[#eee]" />
        </div>
        {/* {ALL FORM} */}

        <section className="w-full pt-7 pb-10">
          <div className="w-full flex items-center mb-6">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">All Forms</h5>
          </div>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Suspense
              fallback={
                totalForms > 0 
                  ? Array.from({ length: totalForms }).map((_, idx) => (
                      <FormSkeleton key={idx} />
                    ))
                  : [1, 2, 3].map((item) => (
                      <FormSkeleton key={item} />
                    ))
              }
            >
              <FormList />
            </Suspense>
          </div>
        </section>
      </div>
    </div>
  );
};

async function FormList() {
  const { form } = await fetchAllForms();

  if (!form || form.length === 0) {
    return (
      <div className="col-span-full flex flex-col items-center justify-center py-20 bg-gray-50/50 rounded-3xl border border-dashed border-gray-200">
        <p className="text-gray-500 font-medium">No forms created yet</p>
      </div>
    );
  }

  return (
    <>
      {form.map((form) => (
        <FormItem
          key={form.id}
          id={form.id}
          formId={form.formId}
          name={form.name}
          published={form.published}
          createdAt={form.createdAt}
          responses={form.responses}
          views={form.views}
          backgroundColor={form.settings.backgroundColor}
        />
      ))}
    </>
  );
}

export default Dashboard;
