import { WidgetMetadataBasic } from 'WidgetDefinition';

type WidgetRegistryItem = WidgetMetadataBasic & {
  directoryUrl: string;
  version: string;
  files: string[];
  createdAt: string;
  updatedAt: string;
  externalPeerDependencies?: Record<string, { src: string }>;
};

export type WidgetRegistry = WidgetRegistryItem[];
