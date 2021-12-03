import { EntryObject } from 'webpack';
import { Schema } from 'ajv';
import { RegistryConfig } from 'RegistryConfig';

export type WidgetMetadataBasic = {
  shortcode: string;
  title: string;
  status?: 'stable' | 'beta' | 'wip' | 'deprecated';
  settingsSchema?: {
    fields: Schema;
  };
  description?: string;
  additionalCustomProperties?: Record<string, scalar>;
  externalPeerDependencies?: RegistryConfig['externalPeerDependencies'];
};

export type WidgetDefinition = WidgetMetadataBasic & { entry: EntryObject };
