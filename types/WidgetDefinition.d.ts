import { Schema } from 'ajv';

export type WidgetMetadataBasic = {
  shortcode: string;
  title: string;
  status?: 'stable' | 'beta' | 'wip' | 'deprecated';
  settingsSchema?: {
    type: 'object';
    properties: {
      fields: Schema;
    };
  };
  description?: string;
  additionalCustomProperties?: Record<string, scalar>;
  preview?: {
    thumbnail?: string;
    url?: string;
  };
};

export type WidgetDefinition = WidgetMetadataBasic & {
  entry: string;
  useExternalPeerDependencies: string[];
};
