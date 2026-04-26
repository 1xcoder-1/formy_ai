"use client";

import React, { FC, useState } from "react";
import { FormBlockInstance } from "@/@types/form-block.type";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Key, Loader, Download } from "lucide-react";
import { fetchAllResponseByFormId, exportAllResponsesByFormId } from "@/actions/form.action";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import * as XLSX from "xlsx";

type Props = {
  blocks: FormBlockInstance[];
  responses: {
    formId: number;
    id: number;
    createdAt: Date;
    jsonReponse: string;
  }[];
  formId: string;
};

const AllReponds: FC<Props> = ({ blocks, responses: initialResponses, formId }) => {
  const [responses, setResponses] = useState(initialResponses);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [exportLoading, setExportLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialResponses.length === 20);

  const exportToExcel = async () => {
    setExportLoading(true);
    try {
      const result = await exportAllResponsesByFormId(formId);
      if (!result.success || !result.responses) {
        toast({ title: "Error", description: "Failed to load responses for export", variant: "destructive" });
        return;
      }

      const parsedBlocks = JSON.parse(result.jsonBlocks || "[]") as FormBlockInstance[];
      const questionsMap: Record<string, string> = {};
      const inputBlockTypes = ["TextField", "TextArea", "RadioSelect", "StarRating", "Checkbox", "Select", "DatePicker"];

      const mapExportBlocks = (blockList: FormBlockInstance[]) => {
        blockList.forEach((block) => {
          if (!block) return;
          if (inputBlockTypes.includes(block.blockType) && block.attributes?.label) {
            questionsMap[block.id] = block.attributes.label;
          }
          if (block.childblocks && block.childblocks.length > 0) {
            mapExportBlocks(block.childblocks);
          }
        });
      };

      mapExportBlocks(parsedBlocks);

      const keys: string[] = [];
      const headers = ["Submitted At"];

      for (const [key, label] of Object.entries(questionsMap)) {
        keys.push(key);
        headers.push(label);
      }

      // Build data rows for XLSX
      const dataRows = result.responses.map((res) => {
        const parsedRes = JSON.parse(res.jsonReponse) as Record<string, string>;
        const row: Record<string, string> = {
          "Submitted At": new Date(res.createdAt).toLocaleString(),
        };
        keys.forEach(key => {
          const label = questionsMap[key];
          row[label] = parsedRes[key] || "";
        });
        return row;
      });

      const worksheet = XLSX.utils.json_to_sheet(dataRows, { header: headers });
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Responses");

      const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
      const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `responses_${formId}.xlsx`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error(e);
      toast({ title: "Error", description: "Something went wrong during export", variant: "destructive" });
    } finally {
      setExportLoading(false);
    }
  };


  const loadMore = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    const nextPage = page + 1;
    try {
      const result = await fetchAllResponseByFormId(formId, nextPage, 20);
      if (result.success && result.form?.formResponses) {
        setResponses((prev) => [...prev, ...result.form!.formResponses]);
        setPage(nextPage);
        if (result.form.formResponses.length < 20) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const childblockMap: Record<string, string> = {};
  const inputBlockTypes = ["TextField", "TextArea", "RadioSelect", "StarRating", "Checkbox", "Select", "DatePicker"];

  const mapBlocks = (blockList: FormBlockInstance[]) => {
    blockList.forEach((block) => {
      if (!block) return;
      if (inputBlockTypes.includes(block.blockType) && block.attributes?.label) {
        childblockMap[block.id] = block.attributes.label;
      }
      if (block.childblocks && block.childblocks.length > 0) {
        mapBlocks(block.childblocks);
      }
    });
  };

  mapBlocks(blocks);
  return (
    <>
      <div className="flex justify-end mb-6 mt-6">
        <Button
          onClick={exportToExcel}
          disabled={exportLoading}
          variant="outline"
          className="gap-2 bg-white dark:bg-gray-900 border border-gray-200 shadow-sm"
        >
          {exportLoading ? <Loader className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
          {exportLoading ? "Exporting..." : "Export to Excel"}
        </Button>
      </div>

      <div
        className="grid grid-cols-1 
              lg:grid-cols-3
               gap-4 mt-3"
      >
        {responses.map((response) => {
          const parsedResponses = JSON.parse(response.jsonReponse) as {
            id: string;
            responseValue: string;
          };
          return (
            <Card
              key={response.id}
              className="
           bg-white p-3
           mb-2 w-full"
            >
              <CardContent className="pb-0 px-1">
                <div className="space-y-2">
                  <div
                    className="pb-2 w-full flex items-center gap-2 border-b
                        border-gray-200
                        "
                  >
                    <h4 className="font-semibold">Question/Answer</h4>
                    <span
                      className="text-xs 
                  text-muted-foreground
                  flex items-center"
                    >
                      <Clock className="w-3 h-3" />
                      {new Date(response.createdAt).toLocaleString()}
                    </span>
                  </div>

                  <div
                    className={`space-y-3 pr-2 ${Object.keys(parsedResponses).length > 3 ? "max-h-[200px] overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-gray-200 dark:[&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded [&::-webkit-scrollbar-track]:bg-transparent" : ""}`}
                  />
                  {Object.entries(parsedResponses).map(([key, value]) => {
                    return (
                      <div key={key} className="flex-col">
                        <div
                          className="font-medium text-base 
                      mb-[2px] text-gray-800"
                        >
                          {childblockMap[key] || "Unknown Field"}
                        </div>
                        <div
                          className="text-sm pl-1
                       text-gray-600"
                        >
                          - {value}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}

        {responses.length === 0 && (
          <div className="col-span-full flex justify-center py-10 text-muted-foreground">
            No responses yet.
          </div>
        )}

        {hasMore && (
          <div className="col-span-full flex justify-center mt-4 mb-8">
            <Button onClick={loadMore} disabled={loading} variant="outline">
              {loading ? <Loader className="w-4 h-4 animate-spin mr-2" /> : null}
              {loading ? "Loading..." : "Load More"}
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default AllReponds;
