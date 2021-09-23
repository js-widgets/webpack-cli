---
sidebar_position: 1
title: Widget Registry Sources
---

:::info
This section focuses on the [Drupal integration](https://www.drupal.org/project/widget_instance). In the future other
CMS integrations may exist.
:::

In order to integrate _the widget registry_ with the [Drupal](https://www.drupal.org) CMS you will need to
[install and enable](https://www.drupal.org/docs/extending-drupal/installing-modules) the following contributed modules:

  - [Widget Ingestion](https://www.drupal.org/project/widget_ingestion)
  - [Widget Type](https://www.drupal.org/project/widget_type)
  - [Widget Instance](https://www.drupal.org/project/widget_instance)

This will give you this configuration screen under `/admin/content/interactive-components/widget-registry-source` where
you can paste the URL to the `registry.json` uploaded in [step #2](../build-registry#upload-the-registry).

<details>
<summary>Visual walk through</summary>
<div>
<img src={require('@site/static/img/cms/source-list-empty.png').default} alt="Widget sources empty"/>
<img src={require('@site/static/img/cms/create-source.png').default} alt="Create the widget source"/>
<img src={require('@site/static/img/cms/source-list.png').default} alt="Widget sources with the registry"/>
</div>
</details>

:::tip Compatible with Multiple Registry Sources
You can add **many widget registry sources** to your CMS. This is a great way to have widgets powered by different
technologies, have different governance, or come from different development teams.
:::

Once the source is created the CMS will periodically check for changes in the `registry.json` to include new changes. If
you need to, you can trigger the ingestion manually as well.

![Ingestion](../../static/img/cms/trigger-ingestion.png)
