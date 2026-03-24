"use client";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useDraggable } from "@dnd-kit/core";
import { ObjectBlockType } from "@/@types/form-block.type";
import { useBuilder } from "@/context/builder-provider";
import { useIsMobile } from "@/hooks/use-mobile";
import { generateUniqueId } from "@/lib/helper";

import { useSidebar } from "./ui/sidebar";

import { allBlockLayouts } from "@/constant";
import { FormBlocks } from "@/lib/form-blocks";

const BlockBtnElement = ({
  formBlock,
  disabled,
}: {
  formBlock: ObjectBlockType;
  disabled?: boolean;
}) => {
  const { icon: Icon, label } = formBlock.blockBtnElement;
  const {
    addBlockLayout,
    handleSeletedLayout,
    selectedBlockLayout,
    blockLayouts,
    updateBlockLayout,
  } = useBuilder();
  const isMobile = useIsMobile();
  const { setOpenMobile } = useSidebar();

  const draggable = useDraggable({
    id: `block-btn-${formBlock.blockType}`,
    disabled: disabled,
    data: {
      blockType: formBlock.blockType,
      isBlockBtnElement: true,
    },
  });

  const handleClick = () => {
    if (isMobile && !disabled) {
      const blockType = formBlock.blockType;
      const isLayout = allBlockLayouts.includes(blockType);
      const newInstance = formBlock.createInstance(generateUniqueId());

      if (isLayout) {
        addBlockLayout(newInstance);
        handleSeletedLayout(newInstance);
      } else {
        // Ensure field is added inside a layout
        let targetLayout = selectedBlockLayout;
        // If a layout is not selected, try to find the last available layout
        if (!targetLayout || !allBlockLayouts.includes(targetLayout.blockType)) {
          const layouts = blockLayouts.filter((b) =>
            allBlockLayouts.includes(b.blockType)
          );
          targetLayout =
            layouts.length > 0 ? layouts[layouts.length - 1] : null;
        }

        if (targetLayout) {
          const updatedChildren = [
            ...(targetLayout.childblocks || []),
            newInstance,
          ];
          updateBlockLayout(targetLayout.id, updatedChildren);
        } else {
          // No layout exists, so create a RowLayout and put the field in it
          const rowBlock = FormBlocks["RowLayout"];
          const newRow = rowBlock.createInstance(generateUniqueId());
          newRow.childblocks = [newInstance];
          addBlockLayout(newRow);
        }
        handleSeletedLayout(newInstance);
      }
      setOpenMobile(false);
    }
  };

  return (
    <Button
      disabled={disabled}
      ref={draggable.setNodeRef}
      onClick={handleClick}
      className={cn(
        `
        flex flex-col gap-2
        h-[75px] w-full max-w-[80px] cursor-grab
        !bg-white border
        text-gray-600
        hover:bg-white hover:ring-1
        hover:!ring-primary`,
        draggable.isDragging && "ring-2 ring-primary shadow-xl",
        disabled && "!cursor-default !pointer-events-none"
      )}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      <Icon
        className="!w-8 !h-8 
        !stroke-[0.9]
          !cursor-grab"
      />
      <h5
        className="text-[11.4px]
          -mt-1 text-gray-600 truncate w-full px-1"
        style={{ fontWeight: 500 }}
      >
        {label}
      </h5>
    </Button>
  );
};

export default BlockBtnElement;
