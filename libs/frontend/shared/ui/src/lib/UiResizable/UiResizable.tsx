'use client';

import * as React from 'react';
import { GripVerticalIcon } from 'lucide-react';
import * as ResizablePrimitive from 'react-resizable-panels';

import { cn } from '@shared/utils/cn';
import {
  resizablePanelGroupVariants,
  resizableHandleVariants,
  resizableHandleIndicatorVariants,
  resizableHandleIconVariants,
} from './config';

function UiResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
  return (
    <ResizablePrimitive.PanelGroup
      data-slot="resizable-panel-group"
      className={cn(resizablePanelGroupVariants({ variant: 'default' }), className)}
      {...props}
    />
  );
}

function UiResizablePanel({
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Panel>) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />;
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={cn(resizableHandleVariants({ variant: 'default' }), className)}
      {...props}
    >
      {withHandle && (
        <div className={cn(resizableHandleIndicatorVariants({ variant: 'default' }))}>
          <GripVerticalIcon className={cn(resizableHandleIconVariants({ variant: 'default' }))} />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  );
}

export { UiResizablePanelGroup, UiResizablePanel, ResizableHandle };
