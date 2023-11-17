import { Client, SimpleSchemaTypes } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  const newFields: Record<string, SimpleSchemaTypes.Field> = {};
  const newFieldsets: Record<string, SimpleSchemaTypes.Fieldset> = {};
  const newItemTypes: Record<string, SimpleSchemaTypes.ItemType> = {};
  const newMenuItems: Record<string, SimpleSchemaTypes.MenuItem> = {};

  console.log("Create new models/block models");
  console.log('Create model "Edizione Festival" (`festival_edition`)');
  newItemTypes["2382191"] = await client.itemTypes.create(
    {
      name: "Edizione Festival",
      sortable: true,
      api_key: "festival_edition",
      draft_mode_active: true,
      all_locales_required: true,
      collection_appearance: "table",
      inverse_relationships_enabled: true,
    },
    { skip_menu_item_creation: true }
  );

  console.log('Create model "Residenza Artistica" (`artistic_residecy`)');
  newItemTypes["2382769"] = await client.itemTypes.create(
    {
      name: "Residenza Artistica",
      sortable: true,
      api_key: "artistic_residecy",
      draft_mode_active: true,
      all_locales_required: true,
      collection_appearance: "table",
      inverse_relationships_enabled: true,
    },
    { skip_menu_item_creation: true }
  );

  console.log('Create model "Paese" (`country`)');
  newItemTypes["2383134"] = await client.itemTypes.create(
    {
      name: "Paese",
      api_key: "country",
      all_locales_required: true,
      collection_appearance: "table",
      inverse_relationships_enabled: false,
    },
    { skip_menu_item_creation: true }
  );

  console.log('Create model "Compagnia" (`company`)');
  newItemTypes["2383186"] = await client.itemTypes.create(
    {
      name: "Compagnia",
      sortable: true,
      api_key: "company",
      draft_mode_active: true,
      all_locales_required: true,
      collection_appearance: "table",
      inverse_relationships_enabled: true,
    },
    { skip_menu_item_creation: true }
  );

  console.log('Create model "Autore Media" (`media_author`)');
  newItemTypes["2383203"] = await client.itemTypes.create(
    {
      name: "Autore Media",
      sortable: true,
      api_key: "media_author",
      draft_mode_active: true,
      all_locales_required: true,
      collection_appearance: "table",
      inverse_relationships_enabled: true,
    },
    { skip_menu_item_creation: true }
  );

  console.log('Create model "Pubblicazione" (`publication`)');
  newItemTypes["2386114"] = await client.itemTypes.create(
    {
      name: "Pubblicazione",
      api_key: "publication",
      draft_mode_active: true,
      all_locales_required: true,
      collection_appearance: "table",
      inverse_relationships_enabled: true,
    },
    { skip_menu_item_creation: true }
  );

  console.log('Create model "Media Foto" (`media_photo`)');
  newItemTypes["2386193"] = await client.itemTypes.create(
    {
      name: "Media Foto",
      api_key: "media_photo",
      draft_mode_active: true,
      collection_appearance: "table",
      inverse_relationships_enabled: true,
    },
    { skip_menu_item_creation: true }
  );

  console.log('Create model "Categoria Media Foto" (`media_photo_category`)');
  newItemTypes["2386223"] = await client.itemTypes.create(
    {
      name: "Categoria Media Foto",
      api_key: "media_photo_category",
      all_locales_required: true,
      collection_appearance: "table",
      inverse_relationships_enabled: true,
    },
    { skip_menu_item_creation: true }
  );

  console.log(
    'Create model "Categoria Media Documento " (`media_document_category`)'
  );
  newItemTypes["2386225"] = await client.itemTypes.create(
    {
      name: "Categoria Media Documento ",
      api_key: "media_document_category",
      all_locales_required: true,
      collection_appearance: "table",
      inverse_relationships_enabled: false,
    },
    { skip_menu_item_creation: true }
  );

  console.log('Create model "Categoria Media Video" (`media_video_category`)');
  newItemTypes["2386227"] = await client.itemTypes.create(
    {
      name: "Categoria Media Video",
      api_key: "media_video_category",
      all_locales_required: true,
      collection_appearance: "table",
      inverse_relationships_enabled: false,
    },
    { skip_menu_item_creation: true }
  );

  console.log('Create model "Media Video" (`media_video`)');
  newItemTypes["2386232"] = await client.itemTypes.create(
    {
      name: "Media Video",
      api_key: "media_video",
      draft_mode_active: true,
      collection_appearance: "table",
      inverse_relationships_enabled: true,
    },
    { skip_menu_item_creation: true }
  );

  console.log('Create model "Media Documento" (`media_document`)');
  newItemTypes["2386253"] = await client.itemTypes.create(
    {
      name: "Media Documento",
      api_key: "media_document",
      draft_mode_active: true,
      collection_appearance: "table",
      inverse_relationships_enabled: true,
    },
    { skip_menu_item_creation: true }
  );

  console.log('Create model "Media Audio" (`media_audio`)');
  newItemTypes["2386254"] = await client.itemTypes.create(
    {
      name: "Media Audio",
      api_key: "media_audio",
      draft_mode_active: true,
      collection_appearance: "table",
      inverse_relationships_enabled: true,
    },
    { skip_menu_item_creation: true }
  );

  console.log('Create model "Categoria Media Audio" (`media_audio_category`)');
  newItemTypes["2386255"] = await client.itemTypes.create(
    {
      name: "Categoria Media Audio",
      api_key: "media_audio_category",
      all_locales_required: true,
      collection_appearance: "table",
      inverse_relationships_enabled: false,
    },
    { skip_menu_item_creation: true }
  );

  console.log('Create model "Archivio Media" (`media_archive`)');
  newItemTypes["2386354"] = await client.itemTypes.create(
    {
      name: "Archivio Media",
      singleton: true,
      api_key: "media_archive",
      all_locales_required: true,
      collection_appearance: "table",
      inverse_relationships_enabled: false,
    },
    { skip_menu_item_creation: true }
  );

  console.log('Create model "Archivio Festival" (`festival_editions_archive`)');
  newItemTypes["2386355"] = await client.itemTypes.create(
    {
      name: "Archivio Festival",
      singleton: true,
      api_key: "festival_editions_archive",
      all_locales_required: true,
      collection_appearance: "table",
      inverse_relationships_enabled: false,
    },
    { skip_menu_item_creation: true }
  );

  console.log(
    'Create model "Archivio Artisti e Compagnie" (`artists_companies_archive`)'
  );
  newItemTypes["2386356"] = await client.itemTypes.create(
    {
      name: "Archivio Artisti e Compagnie",
      singleton: true,
      api_key: "artists_companies_archive",
      all_locales_required: true,
      collection_appearance: "table",
      inverse_relationships_enabled: false,
    },
    { skip_menu_item_creation: true }
  );

  console.log('Create model "Archivio Attivit\u00E0" (`activities_archive`)');
  newItemTypes["2386357"] = await client.itemTypes.create(
    {
      name: "Archivio Attivit\u00E0",
      singleton: true,
      api_key: "activities_archive",
      all_locales_required: true,
      collection_appearance: "table",
      inverse_relationships_enabled: false,
    },
    { skip_menu_item_creation: true }
  );

  console.log(
    'Create model "Archivio News e Pubblicazioni" (`news_publications_archive`)'
  );
  newItemTypes["2386358"] = await client.itemTypes.create(
    {
      name: "Archivio News e Pubblicazioni",
      singleton: true,
      api_key: "news_publications_archive",
      all_locales_required: true,
      collection_appearance: "table",
      inverse_relationships_enabled: false,
    },
    { skip_menu_item_creation: true }
  );

  console.log(
    'Create model "Archivio Partner e Reti" (`pertners_networks_archive`)'
  );
  newItemTypes["2386359"] = await client.itemTypes.create(
    {
      name: "Archivio Partner e Reti",
      singleton: true,
      api_key: "pertners_networks_archive",
      all_locales_required: true,
      collection_appearance: "table",
      inverse_relationships_enabled: false,
    },
    { skip_menu_item_creation: true }
  );

  console.log('Create model "Archivio Anni" (`years_archive`)');
  newItemTypes["2386360"] = await client.itemTypes.create(
    {
      name: "Archivio Anni",
      singleton: true,
      api_key: "years_archive",
      all_locales_required: true,
      collection_appearance: "table",
      inverse_relationships_enabled: false,
    },
    { skip_menu_item_creation: true }
  );

  console.log('Create model "Indice News" (`news_index`)');
  newItemTypes["2386402"] = await client.itemTypes.create(
    {
      name: "Indice News",
      singleton: true,
      api_key: "news_index",
      all_locales_required: true,
      collection_appearance: "table",
      inverse_relationships_enabled: false,
    },
    { skip_menu_item_creation: true }
  );

  console.log('Create model "Indice Video" (`videos_index`)');
  newItemTypes["2386537"] = await client.itemTypes.create(
    {
      name: "Indice Video",
      singleton: true,
      api_key: "videos_index",
      all_locales_required: true,
      collection_appearance: "table",
      inverse_relationships_enabled: false,
    },
    { skip_menu_item_creation: true }
  );

  console.log('Create model "Indice Audio" (`audios_index`)');
  newItemTypes["2386538"] = await client.itemTypes.create(
    {
      name: "Indice Audio",
      singleton: true,
      api_key: "audios_index",
      all_locales_required: true,
      collection_appearance: "table",
      inverse_relationships_enabled: false,
    },
    { skip_menu_item_creation: true }
  );

  console.log('Create model "Indice Eventi" (`events_index`)');
  newItemTypes["2386539"] = await client.itemTypes.create(
    {
      name: "Indice Eventi",
      singleton: true,
      api_key: "events_index",
      all_locales_required: true,
      collection_appearance: "table",
      inverse_relationships_enabled: false,
    },
    { skip_menu_item_creation: true }
  );

  console.log('Create model "Indice Progetti" (`projects_index`)');
  newItemTypes["2386540"] = await client.itemTypes.create(
    {
      name: "Indice Progetti",
      singleton: true,
      api_key: "projects_index",
      all_locales_required: true,
      collection_appearance: "table",
      inverse_relationships_enabled: false,
    },
    { skip_menu_item_creation: true }
  );

  console.log('Create model "Indice Reti" (`networks_index`)');
  newItemTypes["2386541"] = await client.itemTypes.create(
    {
      name: "Indice Reti",
      singleton: true,
      api_key: "networks_index",
      all_locales_required: true,
      collection_appearance: "table",
      inverse_relationships_enabled: false,
    },
    { skip_menu_item_creation: true }
  );

  console.log('Create model "Indice Artisti" (`artists_index`)');
  newItemTypes["2386724"] = await client.itemTypes.create(
    {
      name: "Indice Artisti",
      singleton: true,
      api_key: "artists_index",
      draft_mode_active: true,
      collection_appearance: "table",
      inverse_relationships_enabled: true,
    },
    { skip_menu_item_creation: true }
  );

  console.log(
    'Create model "Indice Residenze Artistiche" (`artistic_residencies_index`)'
  );
  newItemTypes["2386725"] = await client.itemTypes.create(
    {
      name: "Indice Residenze Artistiche",
      singleton: true,
      api_key: "artistic_residencies_index",
      draft_mode_active: true,
      collection_appearance: "table",
      inverse_relationships_enabled: false,
    },
    { skip_menu_item_creation: true }
  );

  console.log('Create model "Formazione" (`education_page`)');
  newItemTypes["2386727"] = await client.itemTypes.create(
    {
      name: "Formazione",
      singleton: true,
      api_key: "education_page",
      draft_mode_active: true,
      all_locales_required: true,
      collection_appearance: "table",
      inverse_relationships_enabled: false,
    },
    { skip_menu_item_creation: true }
  );

  console.log('Create model "Partner Model" (`partner_model`)');
  newItemTypes["2404420"] = await client.itemTypes.create(
    {
      name: "Partner Model",
      sortable: true,
      api_key: "partner_model",
      draft_mode_active: true,
      all_locales_required: true,
      collection_appearance: "table",
      inverse_relationships_enabled: true,
    },
    { skip_menu_item_creation: true }
  );

  console.log("Creating new fields/fieldsets");

  console.log(
    'Create fieldset "Date e opzioni" in model "Edizione Festival" (`festival_edition`)'
  );
  newFieldsets["865835"] = await client.fieldsets.create(
    newItemTypes["2382191"],
    { title: "Date e opzioni" }
  );

  console.log(
    'Create fieldset "Contenuti" in model "Edizione Festival" (`festival_edition`)'
  );
  newFieldsets["865837"] = await client.fieldsets.create(
    newItemTypes["2382191"],
    { title: "Contenuti" }
  );

  console.log(
    'Create Single-line string field "Tipologia Festival" (`festival_type`) in model "Edizione Festival" (`festival_edition`)'
  );
  newFields["12353899"] = await client.fields.create(newItemTypes["2382191"], {
    label: "Tipologia Festival",
    field_type: "string",
    api_key: "festival_type",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "string_radio_group",
      parameters: {
        radios: [
          { hint: "", label: "Oriente Occidente", value: "oriente-occidente" },
          { hint: "", label: "Futuro Presente", value: "futuro-presente" },
        ],
      },
    },
    default_value: "oriente-occidente",
    fieldset: newFieldsets["865835"],
  });

  console.log(
    'Create Single asset field "Immagine hero" (`image_hero`) in model "Edizione Festival" (`festival_edition`)'
  );
  newFields["12373772"] = await client.fields.create(newItemTypes["2382191"], {
    label: "Immagine hero",
    field_type: "file",
    api_key: "image_hero",
    validators: {
      extension: { extensions: [], predefined_list: "transformable_image" },
    },
    appearance: { addons: [], editor: "file", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865837"],
  });

  console.log(
    'Create Single-line string field "Titolo" (`title`) in model "Edizione Festival" (`festival_edition`)'
  );
  newFields["12353896"] = await client.fields.create(newItemTypes["2382191"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create Single link field "Anno" (`year`) in model "Edizione Festival" (`festival_edition`)'
  );
  newFields["12353898"] = await client.fields.create(newItemTypes["2382191"], {
    label: "Anno",
    field_type: "link",
    api_key: "year",
    validators: {
      item_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148638"],
      },
      required: {},
    },
    appearance: { addons: [], editor: "link_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865835"],
  });

  console.log(
    'Create Single link field "Locandina" (`poster`) in model "Edizione Festival" (`festival_edition`)'
  );
  newFields["12373767"] = await client.fields.create(newItemTypes["2382191"], {
    label: "Locandina",
    field_type: "link",
    api_key: "poster",
    validators: {
      item_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2386253"].id],
      },
      unique: {},
    },
    appearance: { addons: [], editor: "link_embed", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865837"],
  });

  console.log(
    'Create Single-line string field "Tema" (`theme`) in model "Edizione Festival" (`festival_edition`)'
  );
  newFields["12353900"] = await client.fields.create(newItemTypes["2382191"], {
    label: "Tema",
    field_type: "string",
    api_key: "theme",
    localized: true,
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
    fieldset: newFieldsets["865837"],
  });

  console.log(
    'Create Date field "Data inizio" (`start_date`) in model "Edizione Festival" (`festival_edition`)'
  );
  newFields["12359385"] = await client.fields.create(newItemTypes["2382191"], {
    label: "Data inizio",
    field_type: "date",
    api_key: "start_date",
    validators: { required: {} },
    appearance: { addons: [], editor: "date_picker", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865835"],
  });

  console.log(
    'Create Structured text field "Descrizione" (`content`) in model "Edizione Festival" (`festival_edition`)'
  );
  newFields["12357515"] = await client.fields.create(newItemTypes["2382191"], {
    label: "Descrizione",
    field_type: "structured_text",
    api_key: "content",
    localized: true,
    validators: {
      structured_text_blocks: { item_types: [] },
      structured_text_links: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [],
      },
    },
    appearance: {
      addons: [],
      editor: "structured_text",
      parameters: {
        marks: ["emphasis", "strong"],
        nodes: ["link"],
        heading_levels: [1, 2, 3, 4, 5, 6],
        blocks_start_collapsed: false,
        show_links_meta_editor: true,
        show_links_target_blank: true,
      },
    },
    deep_filtering_enabled: true,
    fieldset: newFieldsets["865837"],
  });

  console.log(
    'Create Date field "Data fine" (`end_date`) in model "Edizione Festival" (`festival_edition`)'
  );
  newFields["12359386"] = await client.fields.create(newItemTypes["2382191"], {
    label: "Data fine",
    field_type: "date",
    api_key: "end_date",
    validators: { required: {} },
    appearance: { addons: [], editor: "date_picker", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865835"],
  });

  console.log(
    'Create SEO meta tags field "SEO" (`seo`) in model "Edizione Festival" (`festival_edition`)'
  );
  newFields["12373049"] = await client.fields.create(newItemTypes["2382191"], {
    label: "SEO",
    field_type: "seo",
    api_key: "seo",
    localized: true,
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: { addons: [], editor: "seo", parameters: {} },
  });

  console.log(
    'Create Slug field "Slug" (`slug`) in model "Edizione Festival" (`festival_edition`)'
  );
  newFields["12373048"] = await client.fields.create(newItemTypes["2382191"], {
    label: "Slug",
    field_type: "slug",
    api_key: "slug",
    localized: true,
    validators: {
      slug_title_field: { title_field_id: newFields["12353896"].id },
      slug_format: { predefined_pattern: "webpage_slug" },
      required: {},
      unique: {},
    },
    appearance: {
      addons: [],
      editor: "slug",
      parameters: { url_prefix: null },
    },
  });

  console.log(
    'Create fieldset "Hero" in model "Residenza Artistica" (`artistic_residecy`)'
  );
  newFieldsets["864479"] = await client.fieldsets.create(
    newItemTypes["2382769"],
    { title: "Hero" }
  );

  console.log(
    'Create fieldset "Opzioni" in model "Residenza Artistica" (`artistic_residecy`)'
  );
  newFieldsets["865885"] = await client.fieldsets.create(
    newItemTypes["2382769"],
    { title: "Opzioni" }
  );

  console.log(
    'Create fieldset "Contenuti" in model "Residenza Artistica" (`artistic_residecy`)'
  );
  newFieldsets["864480"] = await client.fieldsets.create(
    newItemTypes["2382769"],
    { title: "Contenuti" }
  );

  console.log(
    'Create fieldset "Relazioni" in model "Residenza Artistica" (`artistic_residecy`)'
  );
  newFieldsets["864478"] = await client.fieldsets.create(
    newItemTypes["2382769"],
    { title: "Relazioni" }
  );

  console.log(
    'Create Multiple links field "Anni" (`years`) in model "Residenza Artistica" (`artistic_residecy`)'
  );
  newFields["12357555"] = await client.fields.create(newItemTypes["2382769"], {
    label: "Anni",
    field_type: "links",
    api_key: "years",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148638"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["864478"],
  });

  console.log(
    'Create Single-line string field "Titolo Hero" (`title_hero`) in model "Residenza Artistica" (`artistic_residecy`)'
  );
  newFields["12357897"] = await client.fields.create(newItemTypes["2382769"], {
    label: "Titolo Hero",
    field_type: "string",
    api_key: "title_hero",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
    fieldset: newFieldsets["864479"],
  });

  console.log(
    'Create Modular content field "Sezioni" (`sections`) in model "Residenza Artistica" (`artistic_residecy`)'
  );
  newFields["12358275"] = await client.fields.create(newItemTypes["2382769"], {
    label: "Sezioni",
    field_type: "rich_text",
    api_key: "sections",
    localized: true,
    validators: { rich_text_blocks: { item_types: ["148643"] } },
    appearance: {
      addons: [],
      editor: "rich_text",
      parameters: { start_collapsed: false },
    },
    deep_filtering_enabled: true,
    fieldset: newFieldsets["864480"],
  });

  console.log(
    'Create Boolean field "Mostra nel sito" (`show_in_website`) in model "Residenza Artistica" (`artistic_residecy`)'
  );
  newFields["12359316"] = await client.fields.create(newItemTypes["2382769"], {
    label: "Mostra nel sito",
    field_type: "boolean",
    api_key: "show_in_website",
    appearance: { addons: [], editor: "boolean", parameters: {} },
    default_value: false,
    fieldset: newFieldsets["865885"],
  });

  console.log(
    'Create Single-line string field "Titolo" (`title`) in model "Residenza Artistica" (`artistic_residecy`)'
  );
  newFields["12357552"] = await client.fields.create(newItemTypes["2382769"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create Multiple links field "Artisti" (`artists`) in model "Residenza Artistica" (`artistic_residecy`)'
  );
  newFields["12357554"] = await client.fields.create(newItemTypes["2382769"], {
    label: "Artisti",
    field_type: "links",
    api_key: "artists",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148639"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["864478"],
  });

  console.log(
    'Create Single-line string field "Descrizione" (`description_hero`) in model "Residenza Artistica" (`artistic_residecy`)'
  );
  newFields["12357898"] = await client.fields.create(newItemTypes["2382769"], {
    label: "Descrizione",
    field_type: "string",
    api_key: "description_hero",
    localized: true,
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
    fieldset: newFieldsets["864479"],
  });

  console.log(
    'Create Multiple links field "Progetti" (`projects`) in model "Residenza Artistica" (`artistic_residecy`)'
  );
  newFields["12357553"] = await client.fields.create(newItemTypes["2382769"], {
    label: "Progetti",
    field_type: "links",
    api_key: "projects",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148649"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["864478"],
  });

  console.log(
    'Create Single asset field "Immagine" (`image_hero`) in model "Residenza Artistica" (`artistic_residecy`)'
  );
  newFields["12358069"] = await client.fields.create(newItemTypes["2382769"], {
    label: "Immagine",
    field_type: "file",
    api_key: "image_hero",
    validators: {
      extension: { extensions: [], predefined_list: "transformable_image" },
    },
    appearance: { addons: [], editor: "file", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["864479"],
  });

  console.log(
    'Create Asset gallery field "Slideshow" (`slideshow_hero`) in model "Residenza Artistica" (`artistic_residecy`)'
  );
  newFields["12358274"] = await client.fields.create(newItemTypes["2382769"], {
    label: "Slideshow",
    field_type: "gallery",
    api_key: "slideshow_hero",
    validators: {
      extension: { extensions: [], predefined_list: "transformable_image" },
    },
    appearance: { addons: [], editor: "gallery", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["864479"],
  });

  console.log(
    'Create SEO meta tags field "SEO" (`seo`) in model "Residenza Artistica" (`artistic_residecy`)'
  );
  newFields["12358277"] = await client.fields.create(newItemTypes["2382769"], {
    label: "SEO",
    field_type: "seo",
    api_key: "seo",
    localized: true,
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: { addons: [], editor: "seo", parameters: {} },
  });

  console.log(
    'Create Slug field "Slug" (`slug`) in model "Residenza Artistica" (`artistic_residecy`)'
  );
  newFields["12358276"] = await client.fields.create(newItemTypes["2382769"], {
    label: "Slug",
    field_type: "slug",
    api_key: "slug",
    validators: {
      slug_title_field: { title_field_id: newFields["12357552"].id },
      slug_format: { predefined_pattern: "webpage_slug" },
      required: {},
      unique: {},
    },
    appearance: {
      addons: [],
      editor: "slug",
      parameters: { url_prefix: null },
    },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "Nome" (`name`) in model "Paese" (`country`)'
  );
  newFields["12358788"] = await client.fields.create(newItemTypes["2383134"], {
    label: "Nome",
    field_type: "string",
    api_key: "name",
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: "",
  });

  console.log('Create fieldset "Hero" in model "Compagnia" (`company`)');
  newFieldsets["864482"] = await client.fieldsets.create(
    newItemTypes["2383186"],
    { title: "Hero" }
  );

  console.log('Create fieldset "Contenuti" in model "Compagnia" (`company`)');
  newFieldsets["864481"] = await client.fieldsets.create(
    newItemTypes["2383186"],
    { title: "Contenuti" }
  );

  console.log('Create fieldset "Relazioni" in model "Compagnia" (`company`)');
  newFieldsets["864483"] = await client.fieldsets.create(
    newItemTypes["2383186"],
    { title: "Relazioni" }
  );

  console.log(
    'Create Multiple links field "Artisti" (`artists`) in model "Compagnia" (`company`)'
  );
  newFields["12358959"] = await client.fields.create(newItemTypes["2383186"], {
    label: "Artisti",
    field_type: "links",
    api_key: "artists",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148639"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["864483"],
  });

  console.log(
    'Create Modular content field "Sezioni" (`sections`) in model "Compagnia" (`company`)'
  );
  newFields["12358963"] = await client.fields.create(newItemTypes["2383186"], {
    label: "Sezioni",
    field_type: "rich_text",
    api_key: "sections",
    localized: true,
    validators: { rich_text_blocks: { item_types: ["148643"] } },
    appearance: {
      addons: [],
      editor: "rich_text",
      parameters: { start_collapsed: false },
    },
    deep_filtering_enabled: true,
    fieldset: newFieldsets["864481"],
  });

  console.log(
    'Create Single-line string field "Titolo" (`title_hero`) in model "Compagnia" (`company`)'
  );
  newFields["12358967"] = await client.fields.create(newItemTypes["2383186"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title_hero",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
    fieldset: newFieldsets["864482"],
  });

  console.log(
    'Create Single-line string field "Descrizione" (`description_hero`) in model "Compagnia" (`company`)'
  );
  newFields["12358960"] = await client.fields.create(newItemTypes["2383186"], {
    label: "Descrizione",
    field_type: "string",
    api_key: "description_hero",
    localized: true,
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
    fieldset: newFieldsets["864482"],
  });

  console.log(
    'Create Single-line string field "Titolo" (`title`) in model "Compagnia" (`company`)'
  );
  newFields["12358966"] = await client.fields.create(newItemTypes["2383186"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create Multiple links field "Paese" (`nation`) in model "Compagnia" (`company`)'
  );
  newFields["12358982"] = await client.fields.create(newItemTypes["2383186"], {
    label: "Paese",
    field_type: "links",
    api_key: "nation",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2383134"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["864483"],
  });

  console.log(
    'Create Single asset field "Immagine" (`image_hero`) in model "Compagnia" (`company`)'
  );
  newFields["12358961"] = await client.fields.create(newItemTypes["2383186"], {
    label: "Immagine",
    field_type: "file",
    api_key: "image_hero",
    validators: {
      extension: { extensions: [], predefined_list: "transformable_image" },
    },
    appearance: { addons: [], editor: "file", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["864482"],
  });

  console.log(
    'Create Asset gallery field "Slideshow" (`slideshow_hero`) in model "Compagnia" (`company`)'
  );
  newFields["12358965"] = await client.fields.create(newItemTypes["2383186"], {
    label: "Slideshow",
    field_type: "gallery",
    api_key: "slideshow_hero",
    validators: {
      extension: { extensions: [], predefined_list: "transformable_image" },
    },
    appearance: { addons: [], editor: "gallery", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["864482"],
  });

  console.log(
    'Create SEO meta tags field "SEO" (`seo`) in model "Compagnia" (`company`)'
  );
  newFields["12358964"] = await client.fields.create(newItemTypes["2383186"], {
    label: "SEO",
    field_type: "seo",
    api_key: "seo",
    localized: true,
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: { addons: [], editor: "seo", parameters: {} },
  });

  console.log(
    'Create Slug field "Slug" (`slug`) in model "Compagnia" (`company`)'
  );
  newFields["12358969"] = await client.fields.create(newItemTypes["2383186"], {
    label: "Slug",
    field_type: "slug",
    api_key: "slug",
    validators: {
      slug_title_field: { title_field_id: newFields["12358967"].id },
      slug_format: { predefined_pattern: "webpage_slug" },
      required: {},
      unique: {},
    },
    appearance: {
      addons: [],
      editor: "slug",
      parameters: { url_prefix: null },
    },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "Nome e Cognome" (`full_name`) in model "Autore Media" (`media_author`)'
  );
  newFields["12359025"] = await client.fields.create(newItemTypes["2383203"], {
    label: "Nome e Cognome",
    field_type: "string",
    api_key: "full_name",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create Single-line string field "Descrizione" (`content`) in model "Autore Media" (`media_author`)'
  );
  newFields["12359099"] = await client.fields.create(newItemTypes["2383203"], {
    label: "Descrizione",
    field_type: "string",
    api_key: "content",
    localized: true,
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create fieldset "Hero/Preview" in model "Pubblicazione" (`publication`)'
  );
  newFieldsets["865830"] = await client.fieldsets.create(
    newItemTypes["2386114"],
    { title: "Hero/Preview", collapsible: true }
  );

  console.log(
    'Create fieldset "Date e opzioni" in model "Pubblicazione" (`publication`)'
  );
  newFieldsets["865829"] = await client.fieldsets.create(
    newItemTypes["2386114"],
    { title: "Date e opzioni" }
  );

  console.log(
    'Create fieldset "Contenuti" in model "Pubblicazione" (`publication`)'
  );
  newFieldsets["865828"] = await client.fieldsets.create(
    newItemTypes["2386114"],
    { title: "Contenuti" }
  );

  console.log(
    'Create fieldset "Relazioni" in model "Pubblicazione" (`publication`)'
  );
  newFieldsets["865831"] = await client.fieldsets.create(
    newItemTypes["2386114"],
    { title: "Relazioni" }
  );

  console.log(
    'Create Structured text field "Contenuto principale" (`content`) in model "Pubblicazione" (`publication`)'
  );
  newFields["12372901"] = await client.fields.create(newItemTypes["2386114"], {
    label: "Contenuto principale",
    field_type: "structured_text",
    api_key: "content",
    localized: true,
    validators: {
      structured_text_blocks: { item_types: ["148653", "148658", "148659"] },
      structured_text_links: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [
          "148639",
          "148649",
          "148650",
          "148651",
          "148656",
          "148657",
          "189821",
        ],
      },
    },
    appearance: {
      addons: [],
      editor: "structured_text",
      parameters: {
        marks: [
          "strong",
          "code",
          "emphasis",
          "underline",
          "strikethrough",
          "highlight",
        ],
        nodes: [
          "blockquote",
          "code",
          "heading",
          "link",
          "list",
          "thematicBreak",
        ],
        heading_levels: [1, 2, 3, 4, 5, 6],
        blocks_start_collapsed: false,
        show_links_meta_editor: false,
        show_links_target_blank: true,
      },
    },
    fieldset: newFieldsets["865828"],
  });

  console.log(
    'Create Date field "Data Riferimento" (`start_date`) in model "Pubblicazione" (`publication`)'
  );
  newFields["12372910"] = await client.fields.create(newItemTypes["2386114"], {
    label: "Data Riferimento",
    field_type: "date",
    api_key: "start_date",
    hint: "Data per ordinamento e ricerca",
    validators: { required: {} },
    appearance: { addons: [], editor: "date_picker", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865829"],
  });

  console.log(
    'Create Single-line string field "Titolo" (`title_hero`) in model "Pubblicazione" (`publication`)'
  );
  newFields["12372913"] = await client.fields.create(newItemTypes["2386114"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title_hero",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
    fieldset: newFieldsets["865830"],
  });

  console.log(
    'Create Multiple links field "Anni" (`years`) in model "Pubblicazione" (`publication`)'
  );
  newFields["12372915"] = await client.fields.create(newItemTypes["2386114"], {
    label: "Anni",
    field_type: "links",
    api_key: "years",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148638"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865831"],
  });

  console.log(
    'Create Single-line string field "Description" (`description_hero`) in model "Pubblicazione" (`publication`)'
  );
  newFields["12372902"] = await client.fields.create(newItemTypes["2386114"], {
    label: "Description",
    field_type: "string",
    api_key: "description_hero",
    localized: true,
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
    fieldset: newFieldsets["865830"],
  });

  console.log(
    'Create Multiple links field "Edizioni festival" (`festival_editions`) in model "Pubblicazione" (`publication`)'
  );
  newFields["12372904"] = await client.fields.create(newItemTypes["2386114"], {
    label: "Edizioni festival",
    field_type: "links",
    api_key: "festival_editions",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2382191"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865831"],
  });

  console.log(
    'Create Single-line string field "Titolo" (`title`) in model "Pubblicazione" (`publication`)'
  );
  newFields["12372912"] = await client.fields.create(newItemTypes["2386114"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create Multiple links field "Artisti" (`artists`) in model "Pubblicazione" (`publication`)'
  );
  newFields["12372899"] = await client.fields.create(newItemTypes["2386114"], {
    label: "Artisti",
    field_type: "links",
    api_key: "artists",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148639"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865831"],
  });

  console.log(
    'Create Single asset field "Immagine" (`image_hero`) in model "Pubblicazione" (`publication`)'
  );
  newFields["12372905"] = await client.fields.create(newItemTypes["2386114"], {
    label: "Immagine",
    field_type: "file",
    api_key: "image_hero",
    validators: { required: {} },
    appearance: { addons: [], editor: "file", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865830"],
  });

  console.log(
    'Create Multiple links field "Compagnie" (`comoanies`) in model "Pubblicazione" (`publication`)'
  );
  newFields["12372900"] = await client.fields.create(newItemTypes["2386114"], {
    label: "Compagnie",
    field_type: "links",
    api_key: "comoanies",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2383186"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865831"],
  });

  console.log(
    'Create Asset gallery field "Slideshow" (`slideshow_hero`) in model "Pubblicazione" (`publication`)'
  );
  newFields["12372909"] = await client.fields.create(newItemTypes["2386114"], {
    label: "Slideshow",
    field_type: "gallery",
    api_key: "slideshow_hero",
    appearance: { addons: [], editor: "gallery", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865830"],
  });

  console.log(
    'Create Multiple links field "Residenze artistiche" (`artistic_residencies`) in model "Pubblicazione" (`publication`)'
  );
  newFields["12372898"] = await client.fields.create(newItemTypes["2386114"], {
    label: "Residenze artistiche",
    field_type: "links",
    api_key: "artistic_residencies",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2382769"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865831"],
  });

  console.log(
    'Create Single-line string field "Layout" (`layout_hero`) in model "Pubblicazione" (`publication`)'
  );
  newFields["12372906"] = await client.fields.create(newItemTypes["2386114"], {
    label: "Layout",
    field_type: "string",
    api_key: "layout_hero",
    validators: { required: {}, enum: { values: ["index", "detail"] } },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: "index",
    fieldset: newFieldsets["865830"],
  });

  console.log(
    'Create Multiple links field "Workhops" (`workhops`) in model "Pubblicazione" (`publication`)'
  );
  newFields["12372914"] = await client.fields.create(newItemTypes["2386114"], {
    label: "Workhops",
    field_type: "links",
    api_key: "workhops",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148651"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865831"],
  });

  console.log(
    'Create Multiple links field "Progetti" (`projects`) in model "Pubblicazione" (`publication`)'
  );
  newFields["12372920"] = await client.fields.create(newItemTypes["2386114"], {
    label: "Progetti",
    field_type: "links",
    api_key: "projects",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148649"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865831"],
  });

  console.log(
    'Create Multiple links field "Eventi" (`events`) in model "Pubblicazione" (`publication`)'
  );
  newFields["12372903"] = await client.fields.create(newItemTypes["2386114"], {
    label: "Eventi",
    field_type: "links",
    api_key: "events",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148656"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865831"],
  });

  console.log(
    'Create SEO meta tags field "SEO" (`seo`) in model "Pubblicazione" (`publication`)'
  );
  newFields["12372907"] = await client.fields.create(newItemTypes["2386114"], {
    label: "SEO",
    field_type: "seo",
    api_key: "seo",
    localized: true,
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: { addons: [], editor: "seo", parameters: {} },
  });

  console.log(
    'Create Multiple links field "Autore" (`media_author`) in model "Pubblicazione" (`publication`)'
  );
  newFields["12372922"] = await client.fields.create(newItemTypes["2386114"], {
    label: "Autore",
    field_type: "links",
    api_key: "media_author",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2383203"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865831"],
  });

  console.log(
    'Create Slug field "Slug" (`slug`) in model "Pubblicazione" (`publication`)'
  );
  newFields["12372916"] = await client.fields.create(newItemTypes["2386114"], {
    label: "Slug",
    field_type: "slug",
    api_key: "slug",
    localized: true,
    validators: {
      slug_title_field: { title_field_id: newFields["12372912"].id },
      slug_format: { predefined_pattern: "webpage_slug" },
      required: {},
      unique: {},
    },
    appearance: {
      addons: [],
      editor: "slug",
      parameters: { url_prefix: null },
    },
  });

  console.log(
    'Create fieldset "Relazioni" in model "Media Foto" (`media_photo`)'
  );
  newFieldsets["865851"] = await client.fieldsets.create(
    newItemTypes["2386193"],
    { title: "Relazioni" }
  );

  console.log(
    'Create Single link field "Categoria" (`category`) in model "Media Foto" (`media_photo`)'
  );
  newFields["12373345"] = await client.fields.create(newItemTypes["2386193"], {
    label: "Categoria",
    field_type: "link",
    api_key: "category",
    validators: {
      item_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2386223"].id],
      },
    },
    appearance: { addons: [], editor: "link_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865851"],
  });

  console.log(
    'Create Single asset field "Immagine" (`image`) in model "Media Foto" (`media_photo`)'
  );
  newFields["12373209"] = await client.fields.create(newItemTypes["2386193"], {
    label: "Immagine",
    field_type: "file",
    api_key: "image",
    validators: {
      required: {},
      extension: { extensions: [], predefined_list: "transformable_image" },
      required_alt_title: { title: true, alt: true },
    },
    appearance: { addons: [], editor: "file", parameters: {} },
    default_value: null,
  });

  console.log(
    'Create Multiple links field "Anni" (`years`) in model "Media Foto" (`media_photo`)'
  );
  newFields["12373219"] = await client.fields.create(newItemTypes["2386193"], {
    label: "Anni",
    field_type: "links",
    api_key: "years",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148638"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865851"],
  });

  console.log(
    'Create Single-line string field "Descrizione" (`description`) in model "Media Foto" (`media_photo`)'
  );
  newFields["12373206"] = await client.fields.create(newItemTypes["2386193"], {
    label: "Descrizione",
    field_type: "string",
    api_key: "description",
    localized: true,
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create Multiple links field "Edizioni festival" (`festival_editions`) in model "Media Foto" (`media_photo`)'
  );
  newFields["12373208"] = await client.fields.create(newItemTypes["2386193"], {
    label: "Edizioni festival",
    field_type: "links",
    api_key: "festival_editions",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2382191"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865851"],
  });

  console.log(
    'Create Multiple links field "Artisti" (`artists`) in model "Media Foto" (`media_photo`)'
  );
  newFields["12373203"] = await client.fields.create(newItemTypes["2386193"], {
    label: "Artisti",
    field_type: "links",
    api_key: "artists",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148639"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865851"],
  });

  console.log(
    'Create Multiple links field "Compagnie" (`comoanies`) in model "Media Foto" (`media_photo`)'
  );
  newFields["12373204"] = await client.fields.create(newItemTypes["2386193"], {
    label: "Compagnie",
    field_type: "links",
    api_key: "comoanies",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2383186"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865851"],
  });

  console.log(
    'Create SEO meta tags field "SEO" (`seo`) in model "Media Foto" (`media_photo`)'
  );
  newFields["12373213"] = await client.fields.create(newItemTypes["2386193"], {
    label: "SEO",
    field_type: "seo",
    api_key: "seo",
    localized: true,
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: { addons: [], editor: "seo", parameters: {} },
  });

  console.log(
    'Create Multiple links field "Residenze artistiche" (`artistic_residencies`) in model "Media Foto" (`media_photo`)'
  );
  newFields["12373202"] = await client.fields.create(newItemTypes["2386193"], {
    label: "Residenze artistiche",
    field_type: "links",
    api_key: "artistic_residencies",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2382769"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865851"],
  });

  console.log(
    'Create Multiple links field "Workhops" (`workhops`) in model "Media Foto" (`media_photo`)'
  );
  newFields["12373218"] = await client.fields.create(newItemTypes["2386193"], {
    label: "Workhops",
    field_type: "links",
    api_key: "workhops",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148651"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865851"],
  });

  console.log(
    'Create Multiple links field "Progetti" (`projects`) in model "Media Foto" (`media_photo`)'
  );
  newFields["12373212"] = await client.fields.create(newItemTypes["2386193"], {
    label: "Progetti",
    field_type: "links",
    api_key: "projects",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148649"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865851"],
  });

  console.log(
    'Create Multiple links field "Pubblicazioni" (`publications`) in model "Media Foto" (`media_photo`)'
  );
  newFields["12373346"] = await client.fields.create(newItemTypes["2386193"], {
    label: "Pubblicazioni",
    field_type: "links",
    api_key: "publications",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2386114"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865851"],
  });

  console.log(
    'Create Multiple links field "Eventi" (`events`) in model "Media Foto" (`media_photo`)'
  );
  newFields["12373207"] = await client.fields.create(newItemTypes["2386193"], {
    label: "Eventi",
    field_type: "links",
    api_key: "events",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148656"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865851"],
  });

  console.log(
    'Create Multiple links field "News" (`news`) in model "Media Foto" (`media_photo`)'
  );
  newFields["12373459"] = await client.fields.create(newItemTypes["2386193"], {
    label: "News",
    field_type: "links",
    api_key: "news",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148657"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865851"],
  });

  console.log(
    'Create Multiple links field "Autore" (`media_author`) in model "Media Foto" (`media_photo`)'
  );
  newFields["12373211"] = await client.fields.create(newItemTypes["2386193"], {
    label: "Autore",
    field_type: "links",
    api_key: "media_author",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2383203"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865851"],
  });

  console.log(
    'Create Single-line string field "Nome" (`name`) in model "Categoria Media Foto" (`media_photo_category`)'
  );
  newFields["12373333"] = await client.fields.create(newItemTypes["2386223"], {
    label: "Nome",
    field_type: "string",
    api_key: "name",
    localized: true,
    validators: { required: {}, unique: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create Single-line string field "Nome" (`name`) in model "Categoria Media Documento " (`media_document_category`)'
  );
  newFields["12373337"] = await client.fields.create(newItemTypes["2386225"], {
    label: "Nome",
    field_type: "string",
    api_key: "name",
    localized: true,
    validators: { required: {}, unique: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create Single-line string field "Nome" (`name`) in model "Categoria Media Video" (`media_video_category`)'
  );
  newFields["12373339"] = await client.fields.create(newItemTypes["2386227"], {
    label: "Nome",
    field_type: "string",
    api_key: "name",
    localized: true,
    validators: { required: {}, unique: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create fieldset "Opzioni" in model "Media Video" (`media_video`)'
  );
  newFieldsets["865863"] = await client.fieldsets.create(
    newItemTypes["2386232"],
    { title: "Opzioni" }
  );

  console.log(
    'Create fieldset "Relazioni" in model "Media Video" (`media_video`)'
  );
  newFieldsets["865862"] = await client.fieldsets.create(
    newItemTypes["2386232"],
    { title: "Relazioni" }
  );

  console.log(
    'Create Single link field "Categoria" (`category`) in model "Media Video" (`media_video`)'
  );
  newFields["12373353"] = await client.fields.create(newItemTypes["2386232"], {
    label: "Categoria",
    field_type: "link",
    api_key: "category",
    validators: {
      item_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2386227"].id],
      },
    },
    appearance: { addons: [], editor: "link_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865862"],
  });

  console.log(
    'Create Boolean field "Riservato" (`is_reserved`) in model "Media Video" (`media_video`)'
  );
  newFields["12373371"] = await client.fields.create(newItemTypes["2386232"], {
    label: "Riservato",
    field_type: "boolean",
    api_key: "is_reserved",
    hint: "Non sar\u00E0 possibile fruire del video intero, ma viene mostrato il testo per farne richiesta.",
    appearance: { addons: [], editor: "boolean", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865863"],
  });

  console.log(
    'Create Single-line string field "Titolo" (`title`) in model "Media Video" (`media_video`)'
  );
  newFields["12373363"] = await client.fields.create(newItemTypes["2386232"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create Multiple links field "Anni" (`years`) in model "Media Video" (`media_video`)'
  );
  newFields["12373365"] = await client.fields.create(newItemTypes["2386232"], {
    label: "Anni",
    field_type: "links",
    api_key: "years",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148638"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865862"],
  });

  console.log(
    'Create Boolean field "Mostra nel sito" (`show_in_website`) in model "Media Video" (`media_video`)'
  );
  newFields["12373461"] = await client.fields.create(newItemTypes["2386232"], {
    label: "Mostra nel sito",
    field_type: "boolean",
    api_key: "show_in_website",
    appearance: { addons: [], editor: "boolean", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865863"],
  });

  console.log(
    'Create Multiple links field "Edizioni festival" (`festival_editions`) in model "Media Video" (`media_video`)'
  );
  newFields["12373357"] = await client.fields.create(newItemTypes["2386232"], {
    label: "Edizioni festival",
    field_type: "links",
    api_key: "festival_editions",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2382191"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865862"],
  });

  console.log(
    'Create Multiple links field "Artisti" (`artists`) in model "Media Video" (`media_video`)'
  );
  newFields["12373352"] = await client.fields.create(newItemTypes["2386232"], {
    label: "Artisti",
    field_type: "links",
    api_key: "artists",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148639"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865862"],
  });

  console.log(
    'Create External video field "Video" (`video`) in model "Media Video" (`media_video`)'
  );
  newFields["12373373"] = await client.fields.create(newItemTypes["2386232"], {
    label: "Video",
    field_type: "video",
    api_key: "video",
    localized: true,
    validators: { required: {} },
    appearance: { addons: [], editor: "video", parameters: {} },
  });

  console.log(
    'Create Multiple links field "Compagnie" (`comoanies`) in model "Media Video" (`media_video`)'
  );
  newFields["12373354"] = await client.fields.create(newItemTypes["2386232"], {
    label: "Compagnie",
    field_type: "links",
    api_key: "comoanies",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2383186"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865862"],
  });

  console.log(
    'Create Single asset field "Immagine copertina" (`image`) in model "Media Video" (`media_video`)'
  );
  newFields["12373358"] = await client.fields.create(newItemTypes["2386232"], {
    label: "Immagine copertina",
    field_type: "file",
    api_key: "image",
    validators: {
      extension: { extensions: [], predefined_list: "transformable_image" },
    },
    appearance: { addons: [], editor: "file", parameters: {} },
    default_value: null,
  });

  console.log(
    'Create Multiple links field "Residenze artistiche" (`artistic_residencies`) in model "Media Video" (`media_video`)'
  );
  newFields["12373351"] = await client.fields.create(newItemTypes["2386232"], {
    label: "Residenze artistiche",
    field_type: "links",
    api_key: "artistic_residencies",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2382769"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865862"],
  });

  console.log(
    'Create Single-line string field "Descrizione" (`description`) in model "Media Video" (`media_video`)'
  );
  newFields["12373355"] = await client.fields.create(newItemTypes["2386232"], {
    label: "Descrizione",
    field_type: "string",
    api_key: "description",
    localized: true,
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create Multiple links field "Workhops" (`workhops`) in model "Media Video" (`media_video`)'
  );
  newFields["12373364"] = await client.fields.create(newItemTypes["2386232"], {
    label: "Workhops",
    field_type: "links",
    api_key: "workhops",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148651"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865862"],
  });

  console.log(
    'Create Multiple links field "Progetti" (`projects`) in model "Media Video" (`media_video`)'
  );
  newFields["12373360"] = await client.fields.create(newItemTypes["2386232"], {
    label: "Progetti",
    field_type: "links",
    api_key: "projects",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148649"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865862"],
  });

  console.log(
    'Create Multiple links field "Pubblicazioni" (`publications`) in model "Media Video" (`media_video`)'
  );
  newFields["12373361"] = await client.fields.create(newItemTypes["2386232"], {
    label: "Pubblicazioni",
    field_type: "links",
    api_key: "publications",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2386114"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865862"],
  });

  console.log(
    'Create SEO meta tags field "SEO" (`seo`) in model "Media Video" (`media_video`)'
  );
  newFields["12373362"] = await client.fields.create(newItemTypes["2386232"], {
    label: "SEO",
    field_type: "seo",
    api_key: "seo",
    localized: true,
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: { addons: [], editor: "seo", parameters: {} },
  });

  console.log(
    'Create Multiple links field "Eventi" (`events`) in model "Media Video" (`media_video`)'
  );
  newFields["12373356"] = await client.fields.create(newItemTypes["2386232"], {
    label: "Eventi",
    field_type: "links",
    api_key: "events",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148656"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865862"],
  });

  console.log(
    'Create Single link field "News" (`news`) in model "Media Video" (`media_video`)'
  );
  newFields["12373458"] = await client.fields.create(newItemTypes["2386232"], {
    label: "News",
    field_type: "link",
    api_key: "news",
    validators: {
      item_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148657"],
      },
    },
    appearance: { addons: [], editor: "link_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865862"],
  });

  console.log(
    'Create Multiple links field "Autore" (`media_author`) in model "Media Video" (`media_video`)'
  );
  newFields["12373359"] = await client.fields.create(newItemTypes["2386232"], {
    label: "Autore",
    field_type: "links",
    api_key: "media_author",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2383203"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865862"],
  });

  console.log(
    'Create Multiple links field "Video correlati" (`related_videos`) in model "Media Video" (`media_video`)'
  );
  newFields["12373460"] = await client.fields.create(newItemTypes["2386232"], {
    label: "Video correlati",
    field_type: "links",
    api_key: "related_videos",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2386232"].id],
      },
    },
    appearance: { addons: [], editor: "links_embed", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865862"],
  });

  console.log(
    'Create Slug field "Slug" (`slug`) in model "Media Video" (`media_video`)'
  );
  newFields["12373366"] = await client.fields.create(newItemTypes["2386232"], {
    label: "Slug",
    field_type: "slug",
    api_key: "slug",
    localized: true,
    validators: {
      slug_title_field: { title_field_id: newFields["12373363"].id },
      slug_format: { predefined_pattern: "webpage_slug" },
      required: {},
      unique: {},
    },
    appearance: {
      addons: [],
      editor: "slug",
      parameters: { url_prefix: null },
    },
  });

  console.log(
    'Create fieldset "Relazioni" in model "Media Documento" (`media_document`)'
  );
  newFieldsets["865865"] = await client.fieldsets.create(
    newItemTypes["2386253"],
    { title: "Relazioni" }
  );

  console.log(
    'Create Single link field "Categoria" (`category`) in model "Media Documento" (`media_document`)'
  );
  newFields["12373440"] = await client.fields.create(newItemTypes["2386253"], {
    label: "Categoria",
    field_type: "link",
    api_key: "category",
    validators: {
      item_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2386225"].id],
      },
    },
    appearance: { addons: [], editor: "link_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865865"],
  });

  console.log(
    'Create Single-line string field "Titolo" (`title`) in model "Media Documento" (`media_document`)'
  );
  newFields["12373451"] = await client.fields.create(newItemTypes["2386253"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create Multiple links field "Anni" (`years`) in model "Media Documento" (`media_document`)'
  );
  newFields["12373454"] = await client.fields.create(newItemTypes["2386253"], {
    label: "Anni",
    field_type: "links",
    api_key: "years",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148638"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865865"],
  });

  console.log(
    'Create Multiple links field "Edizioni festival" (`festival_editions`) in model "Media Documento" (`media_document`)'
  );
  newFields["12373444"] = await client.fields.create(newItemTypes["2386253"], {
    label: "Edizioni festival",
    field_type: "links",
    api_key: "festival_editions",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2382191"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865865"],
  });

  console.log(
    'Create Multiple links field "Artisti" (`artists`) in model "Media Documento" (`media_document`)'
  );
  newFields["12373439"] = await client.fields.create(newItemTypes["2386253"], {
    label: "Artisti",
    field_type: "links",
    api_key: "artists",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148639"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865865"],
  });

  console.log(
    'Create Single asset field "Allegato" (`attachment`) in model "Media Documento" (`media_document`)'
  );
  newFields["12373456"] = await client.fields.create(newItemTypes["2386253"], {
    label: "Allegato",
    field_type: "file",
    api_key: "attachment",
    localized: true,
    validators: { required: {} },
    appearance: { addons: [], editor: "file", parameters: {} },
  });

  console.log(
    'Create Multiple links field "Compagnie" (`comoanies`) in model "Media Documento" (`media_document`)'
  );
  newFields["12373441"] = await client.fields.create(newItemTypes["2386253"], {
    label: "Compagnie",
    field_type: "links",
    api_key: "comoanies",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2383186"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865865"],
  });

  console.log(
    'Create Single asset field "Immagine copertina" (`image`) in model "Media Documento" (`media_document`)'
  );
  newFields["12373445"] = await client.fields.create(newItemTypes["2386253"], {
    label: "Immagine copertina",
    field_type: "file",
    api_key: "image",
    validators: {
      extension: { extensions: [], predefined_list: "transformable_image" },
    },
    appearance: { addons: [], editor: "file", parameters: {} },
    default_value: null,
  });

  console.log(
    'Create Multiple links field "Residenze artistiche" (`artistic_residencies`) in model "Media Documento" (`media_document`)'
  );
  newFields["12373438"] = await client.fields.create(newItemTypes["2386253"], {
    label: "Residenze artistiche",
    field_type: "links",
    api_key: "artistic_residencies",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2382769"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865865"],
  });

  console.log(
    'Create Single-line string field "Descrizione" (`description`) in model "Media Documento" (`media_document`)'
  );
  newFields["12373442"] = await client.fields.create(newItemTypes["2386253"], {
    label: "Descrizione",
    field_type: "string",
    api_key: "description",
    localized: true,
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create Multiple links field "Workhops" (`workhops`) in model "Media Documento" (`media_document`)'
  );
  newFields["12373453"] = await client.fields.create(newItemTypes["2386253"], {
    label: "Workhops",
    field_type: "links",
    api_key: "workhops",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148651"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865865"],
  });

  console.log(
    'Create Multiple links field "Progetti" (`projects`) in model "Media Documento" (`media_document`)'
  );
  newFields["12373448"] = await client.fields.create(newItemTypes["2386253"], {
    label: "Progetti",
    field_type: "links",
    api_key: "projects",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148649"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865865"],
  });

  console.log(
    'Create SEO meta tags field "SEO" (`seo`) in model "Media Documento" (`media_document`)'
  );
  newFields["12373450"] = await client.fields.create(newItemTypes["2386253"], {
    label: "SEO",
    field_type: "seo",
    api_key: "seo",
    localized: true,
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: { addons: [], editor: "seo", parameters: {} },
  });

  console.log(
    'Create Multiple links field "Pubblicazioni" (`publications`) in model "Media Documento" (`media_document`)'
  );
  newFields["12373449"] = await client.fields.create(newItemTypes["2386253"], {
    label: "Pubblicazioni",
    field_type: "links",
    api_key: "publications",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2386114"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865865"],
  });

  console.log(
    'Create Multiple links field "Eventi" (`events`) in model "Media Documento" (`media_document`)'
  );
  newFields["12373443"] = await client.fields.create(newItemTypes["2386253"], {
    label: "Eventi",
    field_type: "links",
    api_key: "events",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148656"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865865"],
  });

  console.log(
    'Create Multiple links field "News" (`news`) in model "Media Documento" (`media_document`)'
  );
  newFields["12373462"] = await client.fields.create(newItemTypes["2386253"], {
    label: "News",
    field_type: "links",
    api_key: "news",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148657"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865865"],
  });

  console.log(
    'Create Multiple links field "Autore" (`media_author`) in model "Media Documento" (`media_document`)'
  );
  newFields["12373447"] = await client.fields.create(newItemTypes["2386253"], {
    label: "Autore",
    field_type: "links",
    api_key: "media_author",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2383203"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865865"],
  });

  console.log(
    'Create Slug field "Slug" (`slug`) in model "Media Documento" (`media_document`)'
  );
  newFields["12373455"] = await client.fields.create(newItemTypes["2386253"], {
    label: "Slug",
    field_type: "slug",
    api_key: "slug",
    localized: true,
    validators: {
      slug_title_field: { title_field_id: newFields["12373451"].id },
      slug_format: { predefined_pattern: "webpage_slug" },
      required: {},
      unique: {},
    },
    appearance: {
      addons: [],
      editor: "slug",
      parameters: { url_prefix: null },
    },
  });

  console.log(
    'Create fieldset "Opzioni" in model "Media Audio" (`media_audio`)'
  );
  newFieldsets["865867"] = await client.fieldsets.create(
    newItemTypes["2386254"],
    { title: "Opzioni" }
  );

  console.log(
    'Create fieldset "Relazioni" in model "Media Audio" (`media_audio`)'
  );
  newFieldsets["865866"] = await client.fieldsets.create(
    newItemTypes["2386254"],
    { title: "Relazioni" }
  );

  console.log(
    'Create Single link field "Categoria" (`category`) in model "Media Audio" (`media_audio`)'
  );
  newFields["12373466"] = await client.fields.create(newItemTypes["2386254"], {
    label: "Categoria",
    field_type: "link",
    api_key: "category",
    validators: {
      item_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2386255"].id],
      },
    },
    appearance: { addons: [], editor: "link_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865866"],
  });

  console.log(
    'Create Boolean field "Mostra nel sito" (`show_in_website`) in model "Media Audio" (`media_audio`)'
  );
  newFields["12373481"] = await client.fields.create(newItemTypes["2386254"], {
    label: "Mostra nel sito",
    field_type: "boolean",
    api_key: "show_in_website",
    appearance: { addons: [], editor: "boolean", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865867"],
  });

  console.log(
    'Create Single-line string field "Titolo" (`title`) in model "Media Audio" (`media_audio`)'
  );
  newFields["12373477"] = await client.fields.create(newItemTypes["2386254"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create Multiple links field "Anni" (`years`) in model "Media Audio" (`media_audio`)'
  );
  newFields["12373479"] = await client.fields.create(newItemTypes["2386254"], {
    label: "Anni",
    field_type: "links",
    api_key: "years",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148638"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865866"],
  });

  console.log(
    'Create Multiple links field "Edizioni festival" (`festival_editions`) in model "Media Audio" (`media_audio`)'
  );
  newFields["12373470"] = await client.fields.create(newItemTypes["2386254"], {
    label: "Edizioni festival",
    field_type: "links",
    api_key: "festival_editions",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2382191"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865866"],
  });

  console.log(
    'Create Multiple links field "Artisti" (`artists`) in model "Media Audio" (`media_audio`)'
  );
  newFields["12373464"] = await client.fields.create(newItemTypes["2386254"], {
    label: "Artisti",
    field_type: "links",
    api_key: "artists",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148639"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865866"],
  });

  console.log(
    'Create Asset gallery field "File audio" (`audio_files`) in model "Media Audio" (`media_audio`)'
  );
  newFields["12373483"] = await client.fields.create(newItemTypes["2386254"], {
    label: "File audio",
    field_type: "gallery",
    api_key: "audio_files",
    validators: { extension: { extensions: ["mp3"] } },
    appearance: { addons: [], editor: "gallery", parameters: {} },
    default_value: null,
  });

  console.log(
    'Create Multiple links field "Compagnie" (`comoanies`) in model "Media Audio" (`media_audio`)'
  );
  newFields["12373467"] = await client.fields.create(newItemTypes["2386254"], {
    label: "Compagnie",
    field_type: "links",
    api_key: "comoanies",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2383186"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865866"],
  });

  console.log(
    'Create Single-line string field "Codice Spreaker" (`spreker_embed_code`) in model "Media Audio" (`media_audio`)'
  );
  newFields["12373484"] = await client.fields.create(newItemTypes["2386254"], {
    label: "Codice Spreaker",
    field_type: "string",
    api_key: "spreker_embed_code",
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: "",
  });

  console.log(
    'Create Multiple links field "Residenze artistiche" (`artistic_residencies`) in model "Media Audio" (`media_audio`)'
  );
  newFields["12373463"] = await client.fields.create(newItemTypes["2386254"], {
    label: "Residenze artistiche",
    field_type: "links",
    api_key: "artistic_residencies",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2382769"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865866"],
  });

  console.log(
    'Create Single-line string field "Descrizione" (`description`) in model "Media Audio" (`media_audio`)'
  );
  newFields["12373468"] = await client.fields.create(newItemTypes["2386254"], {
    label: "Descrizione",
    field_type: "string",
    api_key: "description",
    localized: true,
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create Multiple links field "Workhops" (`workhops`) in model "Media Audio" (`media_audio`)'
  );
  newFields["12373478"] = await client.fields.create(newItemTypes["2386254"], {
    label: "Workhops",
    field_type: "links",
    api_key: "workhops",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148651"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865866"],
  });

  console.log(
    'Create Multiple links field "Progetti" (`projects`) in model "Media Audio" (`media_audio`)'
  );
  newFields["12373474"] = await client.fields.create(newItemTypes["2386254"], {
    label: "Progetti",
    field_type: "links",
    api_key: "projects",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148649"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865866"],
  });

  console.log(
    'Create Multiple links field "Pubblicazioni" (`publications`) in model "Media Audio" (`media_audio`)'
  );
  newFields["12373475"] = await client.fields.create(newItemTypes["2386254"], {
    label: "Pubblicazioni",
    field_type: "links",
    api_key: "publications",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2386114"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865866"],
  });

  console.log(
    'Create SEO meta tags field "SEO" (`seo`) in model "Media Audio" (`media_audio`)'
  );
  newFields["12373476"] = await client.fields.create(newItemTypes["2386254"], {
    label: "SEO",
    field_type: "seo",
    api_key: "seo",
    localized: true,
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: { addons: [], editor: "seo", parameters: {} },
  });

  console.log(
    'Create Multiple links field "Eventi" (`events`) in model "Media Audio" (`media_audio`)'
  );
  newFields["12373469"] = await client.fields.create(newItemTypes["2386254"], {
    label: "Eventi",
    field_type: "links",
    api_key: "events",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148656"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865866"],
  });

  console.log(
    'Create Multiple links field "News" (`news`) in model "Media Audio" (`media_audio`)'
  );
  newFields["12373473"] = await client.fields.create(newItemTypes["2386254"], {
    label: "News",
    field_type: "links",
    api_key: "news",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148657"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865866"],
  });

  console.log(
    'Create Multiple links field "Autore" (`media_author`) in model "Media Audio" (`media_audio`)'
  );
  newFields["12373472"] = await client.fields.create(newItemTypes["2386254"], {
    label: "Autore",
    field_type: "links",
    api_key: "media_author",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2383203"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865866"],
  });

  console.log(
    'Create Slug field "Slug" (`slug`) in model "Media Audio" (`media_audio`)'
  );
  newFields["12373480"] = await client.fields.create(newItemTypes["2386254"], {
    label: "Slug",
    field_type: "slug",
    api_key: "slug",
    localized: true,
    validators: {
      slug_title_field: { title_field_id: newFields["12373477"].id },
      slug_format: { predefined_pattern: "webpage_slug" },
      required: {},
      unique: {},
    },
    appearance: {
      addons: [],
      editor: "slug",
      parameters: { url_prefix: null },
    },
  });

  console.log(
    'Create Single-line string field "Nome" (`name`) in model "Categoria Media Audio" (`media_audio_category`)'
  );
  newFields["12373485"] = await client.fields.create(newItemTypes["2386255"], {
    label: "Nome",
    field_type: "string",
    api_key: "name",
    localized: true,
    validators: { required: {}, unique: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create Single-line string field "Titolo" (`title`) in model "Archivio Media" (`media_archive`)'
  );
  newFields["12373880"] = await client.fields.create(newItemTypes["2386354"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: "",
  });

  console.log(
    'Create Single-line string field "Descrizione" (`description`) in model "Archivio Media" (`media_archive`)'
  );
  newFields["12373882"] = await client.fields.create(newItemTypes["2386354"], {
    label: "Descrizione",
    field_type: "string",
    api_key: "description",
    localized: true,
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create SEO meta tags field "SEO" (`seo`) in model "Archivio Media" (`media_archive`)'
  );
  newFields["12373881"] = await client.fields.create(newItemTypes["2386354"], {
    label: "SEO",
    field_type: "seo",
    api_key: "seo",
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: { addons: [], editor: "seo", parameters: {} },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "Titolo" (`title`) in model "Archivio Festival" (`festival_editions_archive`)'
  );
  newFields["12373885"] = await client.fields.create(newItemTypes["2386355"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: "",
  });

  console.log(
    'Create Single-line string field "Descrizione" (`description`) in model "Archivio Festival" (`festival_editions_archive`)'
  );
  newFields["12373883"] = await client.fields.create(newItemTypes["2386355"], {
    label: "Descrizione",
    field_type: "string",
    api_key: "description",
    localized: true,
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create SEO meta tags field "SEO" (`seo`) in model "Archivio Festival" (`festival_editions_archive`)'
  );
  newFields["12373884"] = await client.fields.create(newItemTypes["2386355"], {
    label: "SEO",
    field_type: "seo",
    api_key: "seo",
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: { addons: [], editor: "seo", parameters: {} },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "Titolo" (`title`) in model "Archivio Artisti e Compagnie" (`artists_companies_archive`)'
  );
  newFields["12373889"] = await client.fields.create(newItemTypes["2386356"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: "",
  });

  console.log(
    'Create Single-line string field "Descrizione" (`description`) in model "Archivio Artisti e Compagnie" (`artists_companies_archive`)'
  );
  newFields["12373887"] = await client.fields.create(newItemTypes["2386356"], {
    label: "Descrizione",
    field_type: "string",
    api_key: "description",
    localized: true,
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create SEO meta tags field "SEO" (`seo`) in model "Archivio Artisti e Compagnie" (`artists_companies_archive`)'
  );
  newFields["12373888"] = await client.fields.create(newItemTypes["2386356"], {
    label: "SEO",
    field_type: "seo",
    api_key: "seo",
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: { addons: [], editor: "seo", parameters: {} },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "Titolo" (`title`) in model "Archivio Attivit\u00E0" (`activities_archive`)'
  );
  newFields["12373892"] = await client.fields.create(newItemTypes["2386357"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: "",
  });

  console.log(
    'Create Single-line string field "Descrizione" (`description`) in model "Archivio Attivit\u00E0" (`activities_archive`)'
  );
  newFields["12373890"] = await client.fields.create(newItemTypes["2386357"], {
    label: "Descrizione",
    field_type: "string",
    api_key: "description",
    localized: true,
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create SEO meta tags field "SEO" (`seo`) in model "Archivio Attivit\u00E0" (`activities_archive`)'
  );
  newFields["12373891"] = await client.fields.create(newItemTypes["2386357"], {
    label: "SEO",
    field_type: "seo",
    api_key: "seo",
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: { addons: [], editor: "seo", parameters: {} },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "Titolo" (`title`) in model "Archivio News e Pubblicazioni" (`news_publications_archive`)'
  );
  newFields["12373895"] = await client.fields.create(newItemTypes["2386358"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: "",
  });

  console.log(
    'Create Single-line string field "Descrizione" (`description`) in model "Archivio News e Pubblicazioni" (`news_publications_archive`)'
  );
  newFields["12373893"] = await client.fields.create(newItemTypes["2386358"], {
    label: "Descrizione",
    field_type: "string",
    api_key: "description",
    localized: true,
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create SEO meta tags field "SEO" (`seo`) in model "Archivio News e Pubblicazioni" (`news_publications_archive`)'
  );
  newFields["12373894"] = await client.fields.create(newItemTypes["2386358"], {
    label: "SEO",
    field_type: "seo",
    api_key: "seo",
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: { addons: [], editor: "seo", parameters: {} },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "Titolo" (`title`) in model "Archivio Partner e Reti" (`pertners_networks_archive`)'
  );
  newFields["12373898"] = await client.fields.create(newItemTypes["2386359"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: "",
  });

  console.log(
    'Create Single-line string field "Descrizione" (`description`) in model "Archivio Partner e Reti" (`pertners_networks_archive`)'
  );
  newFields["12373896"] = await client.fields.create(newItemTypes["2386359"], {
    label: "Descrizione",
    field_type: "string",
    api_key: "description",
    localized: true,
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create SEO meta tags field "SEO" (`seo`) in model "Archivio Partner e Reti" (`pertners_networks_archive`)'
  );
  newFields["12373897"] = await client.fields.create(newItemTypes["2386359"], {
    label: "SEO",
    field_type: "seo",
    api_key: "seo",
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: { addons: [], editor: "seo", parameters: {} },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "Titolo" (`title`) in model "Archivio Anni" (`years_archive`)'
  );
  newFields["12373902"] = await client.fields.create(newItemTypes["2386360"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: "",
  });

  console.log(
    'Create Single-line string field "Descrizione" (`description`) in model "Archivio Anni" (`years_archive`)'
  );
  newFields["12373900"] = await client.fields.create(newItemTypes["2386360"], {
    label: "Descrizione",
    field_type: "string",
    api_key: "description",
    localized: true,
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create SEO meta tags field "SEO" (`seo`) in model "Archivio Anni" (`years_archive`)'
  );
  newFields["12373901"] = await client.fields.create(newItemTypes["2386360"], {
    label: "SEO",
    field_type: "seo",
    api_key: "seo",
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: { addons: [], editor: "seo", parameters: {} },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "Titolo" (`title`) in model "Indice News" (`news_index`)'
  );
  newFields["12374002"] = await client.fields.create(newItemTypes["2386402"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create Single-line string field "Descrizione" (`description`) in model "Indice News" (`news_index`)'
  );
  newFields["12374000"] = await client.fields.create(newItemTypes["2386402"], {
    label: "Descrizione",
    field_type: "string",
    api_key: "description",
    localized: true,
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create SEO meta tags field "SEO" (`seo`) in model "Indice News" (`news_index`)'
  );
  newFields["12374001"] = await client.fields.create(newItemTypes["2386402"], {
    label: "SEO",
    field_type: "seo",
    api_key: "seo",
    localized: true,
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: { addons: [], editor: "seo", parameters: {} },
  });

  console.log(
    'Create Single-line string field "Titolo" (`title`) in model "Indice Video" (`videos_index`)'
  );
  newFields["12374349"] = await client.fields.create(newItemTypes["2386537"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create Single-line string field "Descrizione" (`description`) in model "Indice Video" (`videos_index`)'
  );
  newFields["12374347"] = await client.fields.create(newItemTypes["2386537"], {
    label: "Descrizione",
    field_type: "string",
    api_key: "description",
    localized: true,
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create SEO meta tags field "SEO" (`seo`) in model "Indice Video" (`videos_index`)'
  );
  newFields["12374348"] = await client.fields.create(newItemTypes["2386537"], {
    label: "SEO",
    field_type: "seo",
    api_key: "seo",
    localized: true,
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: { addons: [], editor: "seo", parameters: {} },
  });

  console.log(
    'Create Single-line string field "Titolo" (`title`) in model "Indice Audio" (`audios_index`)'
  );
  newFields["12374352"] = await client.fields.create(newItemTypes["2386538"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create Single-line string field "Descrizione" (`description`) in model "Indice Audio" (`audios_index`)'
  );
  newFields["12374350"] = await client.fields.create(newItemTypes["2386538"], {
    label: "Descrizione",
    field_type: "string",
    api_key: "description",
    localized: true,
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create SEO meta tags field "SEO" (`seo`) in model "Indice Audio" (`audios_index`)'
  );
  newFields["12374351"] = await client.fields.create(newItemTypes["2386538"], {
    label: "SEO",
    field_type: "seo",
    api_key: "seo",
    localized: true,
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: { addons: [], editor: "seo", parameters: {} },
  });

  console.log(
    'Create Single-line string field "Titolo" (`title`) in model "Indice Eventi" (`events_index`)'
  );
  newFields["12374355"] = await client.fields.create(newItemTypes["2386539"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create Single-line string field "Descrizione" (`description`) in model "Indice Eventi" (`events_index`)'
  );
  newFields["12374353"] = await client.fields.create(newItemTypes["2386539"], {
    label: "Descrizione",
    field_type: "string",
    api_key: "description",
    localized: true,
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create SEO meta tags field "SEO" (`seo`) in model "Indice Eventi" (`events_index`)'
  );
  newFields["12374354"] = await client.fields.create(newItemTypes["2386539"], {
    label: "SEO",
    field_type: "seo",
    api_key: "seo",
    localized: true,
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: { addons: [], editor: "seo", parameters: {} },
  });

  console.log(
    'Create Single-line string field "Titolo" (`title`) in model "Indice Progetti" (`projects_index`)'
  );
  newFields["12374358"] = await client.fields.create(newItemTypes["2386540"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create Single-line string field "Descrizione" (`description`) in model "Indice Progetti" (`projects_index`)'
  );
  newFields["12374356"] = await client.fields.create(newItemTypes["2386540"], {
    label: "Descrizione",
    field_type: "string",
    api_key: "description",
    localized: true,
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create SEO meta tags field "SEO" (`seo`) in model "Indice Progetti" (`projects_index`)'
  );
  newFields["12374357"] = await client.fields.create(newItemTypes["2386540"], {
    label: "SEO",
    field_type: "seo",
    api_key: "seo",
    localized: true,
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: { addons: [], editor: "seo", parameters: {} },
  });

  console.log(
    'Create Single-line string field "Titolo" (`title`) in model "Indice Reti" (`networks_index`)'
  );
  newFields["12374361"] = await client.fields.create(newItemTypes["2386541"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create Single-line string field "Descrizione" (`description`) in model "Indice Reti" (`networks_index`)'
  );
  newFields["12374359"] = await client.fields.create(newItemTypes["2386541"], {
    label: "Descrizione",
    field_type: "string",
    api_key: "description",
    localized: true,
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create SEO meta tags field "SEO" (`seo`) in model "Indice Reti" (`networks_index`)'
  );
  newFields["12374360"] = await client.fields.create(newItemTypes["2386541"], {
    label: "SEO",
    field_type: "seo",
    api_key: "seo",
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: { addons: [], editor: "seo", parameters: {} },
    default_value: null,
  });

  console.log(
    'Create fieldset "Hero/Preview" in model "Indice Artisti" (`artists_index`)'
  );
  newFieldsets["865981"] = await client.fieldsets.create(
    newItemTypes["2386724"],
    { title: "Hero/Preview", collapsible: true, start_collapsed: true }
  );

  console.log(
    'Create fieldset "Contents" in model "Indice Artisti" (`artists_index`)'
  );
  newFieldsets["865980"] = await client.fieldsets.create(
    newItemTypes["2386724"],
    { title: "Contents" }
  );

  console.log(
    'Create Structured text field "Main Content" (`content`) in model "Indice Artisti" (`artists_index`)'
  );
  newFields["12375382"] = await client.fields.create(newItemTypes["2386724"], {
    label: "Main Content",
    field_type: "structured_text",
    api_key: "content",
    localized: true,
    validators: {
      structured_text_blocks: {
        item_types: [
          "148647",
          "148653",
          "148658",
          "148659",
          "1530788",
          "1530790",
        ],
      },
      structured_text_links: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [
          "148639",
          "148649",
          "148650",
          "148651",
          "148656",
          "148657",
          "189821",
        ],
      },
    },
    appearance: {
      addons: [],
      editor: "structured_text",
      parameters: {
        marks: [
          "strong",
          "code",
          "emphasis",
          "underline",
          "strikethrough",
          "highlight",
        ],
        nodes: [
          "blockquote",
          "code",
          "heading",
          "link",
          "list",
          "thematicBreak",
        ],
        heading_levels: [1, 2, 3, 4, 5, 6],
        blocks_start_collapsed: false,
        show_links_meta_editor: false,
        show_links_target_blank: true,
      },
    },
    fieldset: newFieldsets["865980"],
  });

  console.log(
    'Create Single-line string field "Titolo" (`title_hero`) in model "Indice Artisti" (`artists_index`)'
  );
  newFields["12375394"] = await client.fields.create(newItemTypes["2386724"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title_hero",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
    fieldset: newFieldsets["865981"],
  });

  console.log(
    'Create Single-line string field "Descrizione" (`description_hero`) in model "Indice Artisti" (`artists_index`)'
  );
  newFields["12375383"] = await client.fields.create(newItemTypes["2386724"], {
    label: "Descrizione",
    field_type: "string",
    api_key: "description_hero",
    localized: true,
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
    fieldset: newFieldsets["865981"],
  });

  console.log(
    'Create Modular content field "Sezioni Paragrafo con titolo" (`sections`) in model "Indice Artisti" (`artists_index`)'
  );
  newFields["12375390"] = await client.fields.create(newItemTypes["2386724"], {
    label: "Sezioni Paragrafo con titolo",
    field_type: "rich_text",
    api_key: "sections",
    localized: true,
    validators: { rich_text_blocks: { item_types: ["148643"] } },
    appearance: {
      addons: [],
      editor: "rich_text",
      parameters: { start_collapsed: false },
    },
    fieldset: newFieldsets["865980"],
  });

  console.log(
    'Create Single-line string field "Titolo" (`title`) in model "Indice Artisti" (`artists_index`)'
  );
  newFields["12375393"] = await client.fields.create(newItemTypes["2386724"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create Single asset field "Immagine" (`image_hero`) in model "Indice Artisti" (`artists_index`)'
  );
  newFields["12375384"] = await client.fields.create(newItemTypes["2386724"], {
    label: "Immagine",
    field_type: "file",
    api_key: "image_hero",
    appearance: { addons: [], editor: "file", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865981"],
  });

  console.log(
    'Create Asset gallery field "Slideshow" (`slideshow_hero`) in model "Indice Artisti" (`artists_index`)'
  );
  newFields["12375392"] = await client.fields.create(newItemTypes["2386724"], {
    label: "Slideshow",
    field_type: "gallery",
    api_key: "slideshow_hero",
    appearance: { addons: [], editor: "gallery", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865981"],
  });

  console.log(
    'Create Single-line string field "Layout" (`layout_hero`) in model "Indice Artisti" (`artists_index`)'
  );
  newFields["12375387"] = await client.fields.create(newItemTypes["2386724"], {
    label: "Layout",
    field_type: "string",
    api_key: "layout_hero",
    validators: {
      required: {},
      enum: { values: ["index", "detail", "empty"] },
    },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: "empty",
    fieldset: newFieldsets["865981"],
  });

  console.log(
    'Create SEO meta tags field "SEO" (`seo`) in model "Indice Artisti" (`artists_index`)'
  );
  newFields["12375391"] = await client.fields.create(newItemTypes["2386724"], {
    label: "SEO",
    field_type: "seo",
    api_key: "seo",
    localized: true,
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: { addons: [], editor: "seo", parameters: {} },
  });

  console.log(
    'Create fieldset "Hero/Preview" in model "Indice Residenze Artistiche" (`artistic_residencies_index`)'
  );
  newFieldsets["865985"] = await client.fieldsets.create(
    newItemTypes["2386725"],
    { title: "Hero/Preview", collapsible: true, start_collapsed: true }
  );

  console.log(
    'Create fieldset "Contents" in model "Indice Residenze Artistiche" (`artistic_residencies_index`)'
  );
  newFieldsets["865984"] = await client.fieldsets.create(
    newItemTypes["2386725"],
    { title: "Contents" }
  );

  console.log(
    'Create Structured text field "Main Content" (`content`) in model "Indice Residenze Artistiche" (`artistic_residencies_index`)'
  );
  newFields["12375398"] = await client.fields.create(newItemTypes["2386725"], {
    label: "Main Content",
    field_type: "structured_text",
    api_key: "content",
    localized: true,
    validators: {
      structured_text_blocks: {
        item_types: [
          "148647",
          "148653",
          "148658",
          "148659",
          "1530788",
          "1530790",
        ],
      },
      structured_text_links: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [
          "148639",
          "148649",
          "148650",
          "148651",
          "148656",
          "148657",
          "189821",
        ],
      },
    },
    appearance: {
      addons: [],
      editor: "structured_text",
      parameters: {
        marks: [
          "strong",
          "code",
          "emphasis",
          "underline",
          "strikethrough",
          "highlight",
        ],
        nodes: [
          "blockquote",
          "code",
          "heading",
          "link",
          "list",
          "thematicBreak",
        ],
        heading_levels: [1, 2, 3, 4, 5, 6],
        blocks_start_collapsed: false,
        show_links_meta_editor: false,
        show_links_target_blank: true,
      },
    },
    fieldset: newFieldsets["865984"],
  });

  console.log(
    'Create Single-line string field "Titolo" (`title_hero`) in model "Indice Residenze Artistiche" (`artistic_residencies_index`)'
  );
  newFields["12375406"] = await client.fields.create(newItemTypes["2386725"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title_hero",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
    fieldset: newFieldsets["865985"],
  });

  console.log(
    'Create Single-line string field "Descrizione" (`description_hero`) in model "Indice Residenze Artistiche" (`artistic_residencies_index`)'
  );
  newFields["12375399"] = await client.fields.create(newItemTypes["2386725"], {
    label: "Descrizione",
    field_type: "string",
    api_key: "description_hero",
    localized: true,
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
    fieldset: newFieldsets["865985"],
  });

  console.log(
    'Create Modular content field "Sezioni Paragrafo con titolo" (`sections`) in model "Indice Residenze Artistiche" (`artistic_residencies_index`)'
  );
  newFields["12375402"] = await client.fields.create(newItemTypes["2386725"], {
    label: "Sezioni Paragrafo con titolo",
    field_type: "rich_text",
    api_key: "sections",
    localized: true,
    validators: { rich_text_blocks: { item_types: ["148643"] } },
    appearance: {
      addons: [],
      editor: "rich_text",
      parameters: { start_collapsed: false },
    },
    fieldset: newFieldsets["865984"],
  });

  console.log(
    'Create Single-line string field "Titolo" (`title`) in model "Indice Residenze Artistiche" (`artistic_residencies_index`)'
  );
  newFields["12375405"] = await client.fields.create(newItemTypes["2386725"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create Single asset field "Immagine" (`image_hero`) in model "Indice Residenze Artistiche" (`artistic_residencies_index`)'
  );
  newFields["12375400"] = await client.fields.create(newItemTypes["2386725"], {
    label: "Immagine",
    field_type: "file",
    api_key: "image_hero",
    appearance: { addons: [], editor: "file", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865985"],
  });

  console.log(
    'Create Asset gallery field "Slideshow" (`slideshow_hero`) in model "Indice Residenze Artistiche" (`artistic_residencies_index`)'
  );
  newFields["12375404"] = await client.fields.create(newItemTypes["2386725"], {
    label: "Slideshow",
    field_type: "gallery",
    api_key: "slideshow_hero",
    appearance: { addons: [], editor: "gallery", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865985"],
  });

  console.log(
    'Create Single-line string field "Layout" (`layout_hero`) in model "Indice Residenze Artistiche" (`artistic_residencies_index`)'
  );
  newFields["12375401"] = await client.fields.create(newItemTypes["2386725"], {
    label: "Layout",
    field_type: "string",
    api_key: "layout_hero",
    validators: {
      required: {},
      enum: { values: ["index", "detail", "empty"] },
    },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: "empty",
    fieldset: newFieldsets["865985"],
  });

  console.log(
    'Create SEO meta tags field "SEO" (`seo`) in model "Indice Residenze Artistiche" (`artistic_residencies_index`)'
  );
  newFields["12375403"] = await client.fields.create(newItemTypes["2386725"], {
    label: "SEO",
    field_type: "seo",
    api_key: "seo",
    localized: true,
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: { addons: [], editor: "seo", parameters: {} },
  });

  console.log(
    'Create fieldset "Hero/Preview" in model "Formazione" (`education_page`)'
  );
  newFieldsets["865987"] = await client.fieldsets.create(
    newItemTypes["2386727"],
    { title: "Hero/Preview", collapsible: true, start_collapsed: true }
  );

  console.log(
    'Create fieldset "Contents" in model "Formazione" (`education_page`)'
  );
  newFieldsets["865986"] = await client.fieldsets.create(
    newItemTypes["2386727"],
    { title: "Contents" }
  );

  console.log(
    'Create Structured text field "Main Content" (`content`) in model "Formazione" (`education_page`)'
  );
  newFields["12375414"] = await client.fields.create(newItemTypes["2386727"], {
    label: "Main Content",
    field_type: "structured_text",
    api_key: "content",
    localized: true,
    validators: {
      structured_text_blocks: {
        item_types: [
          "148647",
          "148653",
          "148658",
          "148659",
          "1530788",
          "1530790",
        ],
      },
      structured_text_links: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [
          "148639",
          "148649",
          "148650",
          "148651",
          "148656",
          "148657",
          "189821",
        ],
      },
    },
    appearance: {
      addons: [],
      editor: "structured_text",
      parameters: {
        marks: [
          "strong",
          "code",
          "emphasis",
          "underline",
          "strikethrough",
          "highlight",
        ],
        nodes: [
          "blockquote",
          "code",
          "heading",
          "link",
          "list",
          "thematicBreak",
        ],
        heading_levels: [1, 2, 3, 4, 5, 6],
        blocks_start_collapsed: false,
        show_links_meta_editor: false,
        show_links_target_blank: true,
      },
    },
    fieldset: newFieldsets["865986"],
  });

  console.log(
    'Create Single-line string field "Titolo" (`title_hero`) in model "Formazione" (`education_page`)'
  );
  newFields["12375422"] = await client.fields.create(newItemTypes["2386727"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title_hero",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
    fieldset: newFieldsets["865987"],
  });

  console.log(
    'Create Single-line string field "Descrizione" (`description_hero`) in model "Formazione" (`education_page`)'
  );
  newFields["12375415"] = await client.fields.create(newItemTypes["2386727"], {
    label: "Descrizione",
    field_type: "string",
    api_key: "description_hero",
    localized: true,
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
    fieldset: newFieldsets["865987"],
  });

  console.log(
    'Create Modular content field "Sezioni Paragrafo con titolo" (`sections`) in model "Formazione" (`education_page`)'
  );
  newFields["12375418"] = await client.fields.create(newItemTypes["2386727"], {
    label: "Sezioni Paragrafo con titolo",
    field_type: "rich_text",
    api_key: "sections",
    localized: true,
    validators: { rich_text_blocks: { item_types: ["148643"] } },
    appearance: {
      addons: [],
      editor: "rich_text",
      parameters: { start_collapsed: false },
    },
    fieldset: newFieldsets["865986"],
  });

  console.log(
    'Create Single-line string field "Titolo" (`title`) in model "Formazione" (`education_page`)'
  );
  newFields["12375421"] = await client.fields.create(newItemTypes["2386727"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create Single asset field "Immagine" (`image_hero`) in model "Formazione" (`education_page`)'
  );
  newFields["12375416"] = await client.fields.create(newItemTypes["2386727"], {
    label: "Immagine",
    field_type: "file",
    api_key: "image_hero",
    appearance: { addons: [], editor: "file", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865987"],
  });

  console.log(
    'Create Asset gallery field "Slideshow" (`slideshow_hero`) in model "Formazione" (`education_page`)'
  );
  newFields["12375420"] = await client.fields.create(newItemTypes["2386727"], {
    label: "Slideshow",
    field_type: "gallery",
    api_key: "slideshow_hero",
    appearance: { addons: [], editor: "gallery", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865987"],
  });

  console.log(
    'Create Single-line string field "Layout" (`layout_hero`) in model "Formazione" (`education_page`)'
  );
  newFields["12375417"] = await client.fields.create(newItemTypes["2386727"], {
    label: "Layout",
    field_type: "string",
    api_key: "layout_hero",
    validators: {
      required: {},
      enum: { values: ["index", "detail", "empty"] },
    },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: "empty",
    fieldset: newFieldsets["865987"],
  });

  console.log(
    'Create SEO meta tags field "SEO" (`seo`) in model "Formazione" (`education_page`)'
  );
  newFields["12375419"] = await client.fields.create(newItemTypes["2386727"], {
    label: "SEO",
    field_type: "seo",
    api_key: "seo",
    localized: true,
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: { addons: [], editor: "seo", parameters: {} },
  });

  console.log(
    'Create fieldset "Hero/Preview" in model "Partner Model" (`partner_model`)'
  );
  newFieldsets["871995"] = await client.fieldsets.create(
    newItemTypes["2404420"],
    { title: "Hero/Preview", collapsible: true }
  );

  console.log(
    'Create fieldset "Contenuti" in model "Partner Model" (`partner_model`)'
  );
  newFieldsets["871993"] = await client.fieldsets.create(
    newItemTypes["2404420"],
    { title: "Contenuti" }
  );

  console.log(
    'Create fieldset "Relazioni" in model "Partner Model" (`partner_model`)'
  );
  newFieldsets["871996"] = await client.fieldsets.create(
    newItemTypes["2404420"],
    { title: "Relazioni" }
  );

  console.log(
    'Create Structured text field "Contenuto principale" (`content`) in model "Partner Model" (`partner_model`)'
  );
  newFields["12460145"] = await client.fields.create(newItemTypes["2404420"], {
    label: "Contenuto principale",
    field_type: "structured_text",
    api_key: "content",
    localized: true,
    validators: {
      structured_text_blocks: { item_types: ["148653", "148658", "148659"] },
      structured_text_links: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [
          "148639",
          "148649",
          "148650",
          "148651",
          "148656",
          "148657",
          "189821",
        ],
      },
    },
    appearance: {
      addons: [],
      editor: "structured_text",
      parameters: {
        marks: [
          "strong",
          "code",
          "emphasis",
          "underline",
          "strikethrough",
          "highlight",
        ],
        nodes: [
          "blockquote",
          "code",
          "heading",
          "link",
          "list",
          "thematicBreak",
        ],
        heading_levels: [1, 2, 3, 4, 5, 6],
        blocks_start_collapsed: false,
        show_links_meta_editor: false,
        show_links_target_blank: true,
      },
    },
    fieldset: newFieldsets["871993"],
  });

  console.log(
    'Create Single-line string field "Titolo" (`title_hero`) in model "Partner Model" (`partner_model`)'
  );
  newFields["12460160"] = await client.fields.create(newItemTypes["2404420"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title_hero",
    localized: true,
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
    fieldset: newFieldsets["871995"],
  });

  console.log(
    'Create Multiple links field "Anni" (`years`) in model "Partner Model" (`partner_model`)'
  );
  newFields["12460161"] = await client.fields.create(newItemTypes["2404420"], {
    label: "Anni",
    field_type: "links",
    api_key: "years",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148638"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["871996"],
  });

  console.log(
    'Create Single-line string field "Description" (`description_hero`) in model "Partner Model" (`partner_model`)'
  );
  newFields["12460147"] = await client.fields.create(newItemTypes["2404420"], {
    label: "Description",
    field_type: "string",
    api_key: "description_hero",
    localized: true,
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
    fieldset: newFieldsets["871995"],
  });

  console.log(
    'Create Modular content field "Sezioni Paragrafo con titolo" (`sections`) in model "Partner Model" (`partner_model`)'
  );
  newFields["12460153"] = await client.fields.create(newItemTypes["2404420"], {
    label: "Sezioni Paragrafo con titolo",
    field_type: "rich_text",
    api_key: "sections",
    localized: true,
    validators: { rich_text_blocks: { item_types: ["148643"] } },
    appearance: {
      addons: [],
      editor: "rich_text",
      parameters: { start_collapsed: false },
    },
    fieldset: newFieldsets["871993"],
  });

  console.log(
    'Create Single-line string field "Titolo" (`title`) in model "Partner Model" (`partner_model`)'
  );
  newFields["12460159"] = await client.fields.create(newItemTypes["2404420"], {
    label: "Titolo",
    field_type: "string",
    api_key: "title",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
    default_value: { it: "", en: "" },
  });

  console.log(
    'Create Single asset field "Logo" (`logo`) in model "Partner Model" (`partner_model`)'
  );
  newFields["12460166"] = await client.fields.create(newItemTypes["2404420"], {
    label: "Logo",
    field_type: "file",
    api_key: "logo",
    validators: { required: {} },
    appearance: { addons: [], editor: "file", parameters: {} },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "Link Sito" (`site_url`) in model "Partner Model" (`partner_model`)'
  );
  newFields["12460167"] = await client.fields.create(newItemTypes["2404420"], {
    label: "Link Sito",
    field_type: "string",
    api_key: "site_url",
    validators: { format: { predefined_pattern: "url" } },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: "",
  });

  console.log(
    'Create SEO meta tags field "SEO" (`seo`) in model "Partner Model" (`partner_model`)'
  );
  newFields["12460154"] = await client.fields.create(newItemTypes["2404420"], {
    label: "SEO",
    field_type: "seo",
    api_key: "seo",
    localized: true,
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: { addons: [], editor: "seo", parameters: {} },
  });

  console.log(
    'Create Slug field "Slug" (`slug`) in model "Partner Model" (`partner_model`)'
  );
  newFields["12460162"] = await client.fields.create(newItemTypes["2404420"], {
    label: "Slug",
    field_type: "slug",
    api_key: "slug",
    localized: true,
    validators: {
      slug_title_field: { title_field_id: newFields["12460159"].id },
      slug_format: { predefined_pattern: "webpage_slug" },
      required: {},
      unique: {},
    },
    appearance: {
      addons: [],
      editor: "slug",
      parameters: { url_prefix: null },
    },
  });

  console.log(
    'Create Multiple links field "Immagini timeline" (`images`) in model "Anno" (`year`)'
  );
  newFields["12373773"] = await client.fields.create("148638", {
    label: "Immagini timeline",
    field_type: "links",
    api_key: "images",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2386223"].id],
      },
      size: { max: 5 },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
  });

  console.log('Create Slug field "Slug" (`slug`) in model "Anno" (`year`)');
  newFields["12357556"] = await client.fields.create("148638", {
    label: "Slug",
    field_type: "slug",
    api_key: "slug",
    validators: {
      slug_title_field: { title_field_id: "754274" },
      slug_format: { predefined_pattern: "webpage_slug" },
      required: {},
      unique: {},
    },
    appearance: {
      addons: [],
      editor: "slug",
      parameters: { url_prefix: null },
    },
    default_value: null,
  });

  console.log('Create fieldset "Opzioni" in model "Artista" (`artist`)');
  newFieldsets["865773"] = await client.fieldsets.create("148639", {
    title: "Opzioni",
  });

  console.log('Create fieldset "Relazioni" in model "Artista" (`artist`)');
  newFieldsets["865774"] = await client.fieldsets.create("148639", {
    title: "Relazioni",
  });

  console.log(
    'Create Boolean field "Mostra nel sito" (`show_in_website`) in model "Artista" (`artist`)'
  );
  newFields["12353329"] = await client.fields.create("148639", {
    label: "Mostra nel sito",
    field_type: "boolean",
    api_key: "show_in_website",
    appearance: { addons: [], editor: "boolean", parameters: {} },
    default_value: true,
    fieldset: newFieldsets["865773"],
  });

  // try {
  //   console.log(
  //     'Create Multiple links field "Associated Artist" (`associated_artist`) in model "Artista" (`artist`)'
  //   );
  //   newFields["754276"] = await client.fields.create("148639", {
  //     label: "Associated Artist",
  //     field_type: "links",
  //     api_key: "associated_artist",
  //     validators: {
  //       items_item_type: {
  //         on_publish_with_unpublished_references_strategy: "fail",
  //         on_reference_unpublish_strategy: "delete_references",
  //         on_reference_delete_strategy: "delete_references",
  //         item_types: ["148638"],
  //       },
  //     },
  //     appearance: { addons: [], editor: "links_select", parameters: {} },
  //     default_value: null,
  //     fieldset: newFieldsets["865774"],
  //   });
  // } catch (error) {
  //   console.log("ALREADY EXISTS");
  // }

  console.log(
    'Create Multiple links field "Paese" (`countries`) in model "Artista" (`artist`)'
  );
  newFields["12372280"] = await client.fields.create("148639", {
    label: "Paese",
    field_type: "links",
    api_key: "countries",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2383134"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865774"],
  });
  // try {
  //   console.log(
  //     'Create Single-line string field "Layout" (`layout_hero`) in model "Artista" (`artist`)'
  //   );
  //   newFields["754281"] = await client.fields.create("148639", {
  //     label: "Layout",
  //     field_type: "string",
  //     api_key: "layout_hero",
  //     validators: { required: {}, enum: { values: ["index", "detail"] } },
  //     appearance: {
  //       addons: [],
  //       editor: "single_line",
  //       parameters: { heading: false },
  //     },
  //     default_value: "index",
  //     fieldset: { id: "53348", type: "fieldset" },
  //   });
  // } catch (e) {
  //   console.log("ALREADY EXISTS");
  // }
  console.log(
    'Create Single-line string field "Sottotitolo" (`subtitle`) in model "Menu Item" (`menu_item`)'
  );
  newFields["12373878"] = await client.fields.create("148644", {
    label: "Sottotitolo",
    field_type: "string",
    api_key: "subtitle",
    localized: true,
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: { it: "", en: "" },
  });

  try {
    console.log(
      'Create Slug field "Slug" (`slug`) in model "Homepage" (`home`)'
    );
    newFields["754408"] = await client.fields.create("148648", {
      label: "Slug",
      field_type: "slug",
      api_key: "slug",
      validators: {
        slug_title_field: { title_field_id: "754307" },
        slug_format: { predefined_pattern: "webpage_slug" },
      },
      appearance: {
        addons: [],
        editor: "slug",
        parameters: { url_prefix: null },
      },
      default_value: null,
      fieldset: { id: "53352", type: "fieldset" },
    });
  } catch (error) {
    console.log("ALREADY EXISTS");
  }

  console.log('Create fieldset "Relazioni" in model "Progetto" (`project`)');
  newFieldsets["865838"] = await client.fieldsets.create("148649", {
    title: "Relazioni",
  });

  console.log(
    'Create Multiple links field "Anni" (`years`) in model "Progetto" (`project`)'
  );
  newFields["12373055"] = await client.fields.create("148649", {
    label: "Anni",
    field_type: "links",
    api_key: "years",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148638"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865838"],
  });

  console.log(
    'Create Multiple links field "Reti" (`networks`) in model "Progetto" (`project`)'
  );
  newFields["12373056"] = await client.fields.create("148649", {
    label: "Reti",
    field_type: "links",
    api_key: "networks",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["189821"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865838"],
  });

  console.log(
    'Create Single-line string field "Section" (`section`) in model "Pagina" (`page`)'
  );
  newFields["Il72lmX2TluCMQylyACJFQ"] = await client.fields.create("148650", {
    label: "Section",
    field_type: "string",
    api_key: "section",
    validators: {
      enum: { values: ["-", "Festival", "Info", "People", "Studio"] },
    },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false },
    },
    default_value: "",
  });

  console.log('Create fieldset "Relazioni" in model "Workshop" (`workshop`)');
  newFieldsets["865769"] = await client.fieldsets.create("148651", {
    title: "Relazioni",
  });

  console.log(
    'Create Boolean field "Mostra nel sito" (`show_in_website`) in model "Workshop" (`workshop`)'
  );
  newFields["12372250"] = await client.fields.create("148651", {
    label: "Mostra nel sito",
    field_type: "boolean",
    api_key: "show_in_website",
    appearance: { addons: [], editor: "boolean", parameters: {} },
    default_value: true,
    fieldset: { id: "53364", type: "fieldset" },
  });

  console.log(
    'Create Multiple links field "Anni" (`years`) in model "Workshop" (`workshop`)'
  );
  newFields["12372251"] = await client.fields.create("148651", {
    label: "Anni",
    field_type: "links",
    api_key: "years",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148638"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865769"],
  });

  console.log(
    'Create Multiple links field "Edizioni festival" (`festival_editions`) in model "Workshop" (`workshop`)'
  );
  newFields["12372257"] = await client.fields.create("148651", {
    label: "Edizioni festival",
    field_type: "links",
    api_key: "festival_editions",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2382191"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865769"],
  });

  console.log(
    'Create Multiple links field "Artisti" (`artists`) in model "Workshop" (`workshop`)'
  );
  newFields["12372252"] = await client.fields.create("148651", {
    label: "Artisti",
    field_type: "links",
    api_key: "artists",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148639"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865769"],
  });

  console.log(
    'Create Multiple links field "Compagnie" (`companies`) in model "Workshop" (`workshop`)'
  );
  newFields["12372253"] = await client.fields.create("148651", {
    label: "Compagnie",
    field_type: "links",
    api_key: "companies",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2383186"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865769"],
  });

  console.log(
    'Create Multiple links field "Resisenze artistiche" (`artistic_residecies`) in model "Workshop" (`workshop`)'
  );
  newFields["12372255"] = await client.fields.create("148651", {
    label: "Resisenze artistiche",
    field_type: "links",
    api_key: "artistic_residecies",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2382769"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865769"],
  });

  console.log(
    'Create Multiple links field "Workhops" (`workhops`) in model "Workshop" (`workshop`)'
  );
  newFields["12372256"] = await client.fields.create("148651", {
    label: "Workhops",
    field_type: "links",
    api_key: "workhops",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148651"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865769"],
  });

  console.log(
    'Create Multiple links field "Progetti" (`projects`) in model "Workshop" (`workshop`)'
  );
  newFields["12372258"] = await client.fields.create("148651", {
    label: "Progetti",
    field_type: "links",
    api_key: "projects",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148649"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865769"],
  });

  console.log('Create fieldset "Relazioni" in model "Evento" (`event`)');
  newFieldsets["865720"] = await client.fieldsets.create("148656", {
    title: "Relazioni",
  });

  console.log(
    'Create Boolean field "Co-produzione" (`is_co_production`) in model "Evento" (`event`)'
  );
  newFields["12371613"] = await client.fields.create("148656", {
    label: "Co-produzione",
    field_type: "boolean",
    api_key: "is_co_production",
    appearance: { addons: [], editor: "boolean", parameters: {} },
    default_value: null,
    fieldset: { id: "53365", type: "fieldset" },
  });

  console.log(
    'Create Boolean field "Mostra nel sito" (`show_in_website`) in model "Evento" (`event`)'
  );
  newFields["12371612"] = await client.fields.create("148656", {
    label: "Mostra nel sito",
    field_type: "boolean",
    api_key: "show_in_website",
    appearance: { addons: [], editor: "boolean", parameters: {} },
    default_value: false,
    fieldset: { id: "53365", type: "fieldset" },
  });

  console.log(
    'Create Multiple links field "Anni" (`years`) in model "Evento" (`event`)'
  );
  newFields["12371614"] = await client.fields.create("148656", {
    label: "Anni",
    field_type: "links",
    api_key: "years",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148638"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865720"],
  });

  console.log(
    'Create Multiple links field "Edizioni festival" (`festival_editions`) in model "Evento" (`event`)'
  );
  newFields["12371615"] = await client.fields.create("148656", {
    label: "Edizioni festival",
    field_type: "links",
    api_key: "festival_editions",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2382191"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865720"],
  });

  console.log(
    'Create Multiple links field "Artisti" (`artists`) in model "Evento" (`event`)'
  );
  newFields["12371616"] = await client.fields.create("148656", {
    label: "Artisti",
    field_type: "links",
    api_key: "artists",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148639"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865720"],
  });

  console.log(
    'Create Multiple links field "Compagnie" (`companies`) in model "Evento" (`event`)'
  );
  newFields["12371617"] = await client.fields.create("148656", {
    label: "Compagnie",
    field_type: "links",
    api_key: "companies",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2383186"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865720"],
  });

  console.log(
    'Create Multiple links field "Residenze artistiche" (`artistic_residecies`) in model "Evento" (`event`)'
  );
  newFields["12372254"] = await client.fields.create("148656", {
    label: "Residenze artistiche",
    field_type: "links",
    api_key: "artistic_residecies",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2382769"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865720"],
  });

  console.log(
    'Create Multiple links field "Workhops" (`workhops`) in model "Evento" (`event`)'
  );
  newFields["12371618"] = await client.fields.create("148656", {
    label: "Workhops",
    field_type: "links",
    api_key: "workhops",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148651"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865720"],
  });

  console.log(
    'Create Multiple links field "Progetti" (`projects`) in model "Evento" (`event`)'
  );
  newFields["12371619"] = await client.fields.create("148656", {
    label: "Progetti",
    field_type: "links",
    api_key: "projects",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148649"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865720"],
  });

  console.log('Create fieldset "Date e opzioni" in model "News" (`news`)');
  newFieldsets["865770"] = await client.fieldsets.create("148657", {
    title: "Date e opzioni",
  });

  console.log('Create fieldset "Relazioni" in model "News" (`news`)');
  newFieldsets["865771"] = await client.fieldsets.create("148657", {
    title: "Relazioni",
  });

  console.log(
    'Create Multiple links field "Anni" (`years`) in model "News" (`news`)'
  );
  newFields["12372265"] = await client.fields.create("148657", {
    label: "Anni",
    field_type: "links",
    api_key: "years",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148638"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865771"],
  });

  console.log(
    'Create Boolean field "Mostra in archivio" (`show_in_archive`) in model "News" (`news`)'
  );
  newFields["12372268"] = await client.fields.create("148657", {
    label: "Mostra in archivio",
    field_type: "boolean",
    api_key: "show_in_archive",
    appearance: { addons: [], editor: "boolean", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865770"],
  });

  console.log(
    'Create Multiple links field "Edizioni festival" (`festival_editions`) in model "News" (`news`)'
  );
  newFields["12372270"] = await client.fields.create("148657", {
    label: "Edizioni festival",
    field_type: "links",
    api_key: "festival_editions",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2382191"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865771"],
  });

  console.log(
    'Create Multiple links field "Artisti" (`artists`) in model "News" (`news`)'
  );
  newFields["12372271"] = await client.fields.create("148657", {
    label: "Artisti",
    field_type: "links",
    api_key: "artists",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148639"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865771"],
  });

  console.log(
    'Create Multiple links field "Compagnie" (`comoanies`) in model "News" (`news`)'
  );
  newFields["12372273"] = await client.fields.create("148657", {
    label: "Compagnie",
    field_type: "links",
    api_key: "comoanies",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2383186"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865771"],
  });

  console.log(
    'Create Multiple links field "Residenze artistiche" (`artistic_residencies`) in model "News" (`news`)'
  );
  newFields["12372278"] = await client.fields.create("148657", {
    label: "Residenze artistiche",
    field_type: "links",
    api_key: "artistic_residencies",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [newItemTypes["2382769"].id],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865771"],
  });

  console.log(
    'Create Multiple links field "Workhops" (`workhops`) in model "News" (`news`)'
  );
  newFields["12372274"] = await client.fields.create("148657", {
    label: "Workhops",
    field_type: "links",
    api_key: "workhops",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148651"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865771"],
  });

  console.log(
    'Create Multiple links field "Eventi" (`events`) in model "News" (`news`)'
  );
  newFields["12372279"] = await client.fields.create("148657", {
    label: "Eventi",
    field_type: "links",
    api_key: "events",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148656"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865771"],
  });

  console.log('Create fieldset "Relazioni" in model "Rete" (`network`)');
  newFieldsets["865839"] = await client.fieldsets.create("189821", {
    title: "Relazioni",
  });

  console.log(
    'Create Boolean field "Mostra nel sito" (`show_in_website`) in model "Rete" (`network`)'
  );
  newFields["12373774"] = await client.fields.create("189821", {
    label: "Mostra nel sito",
    field_type: "boolean",
    api_key: "show_in_website",
    appearance: { addons: [], editor: "boolean", parameters: {} },
    default_value: false,
    fieldset: { id: "68402", type: "fieldset" },
  });

  console.log(
    'Create Multiple links field "Anni" (`years`) in model "Rete" (`network`)'
  );
  newFields["12373060"] = await client.fields.create("189821", {
    label: "Anni",
    field_type: "links",
    api_key: "years",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["148638"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
    fieldset: newFieldsets["865839"],
  });

  try {
    console.log(
      'Create Color field "Color" (`color`) in model "Categoria Workshop" (`workshop_category`)'
    );
    newFields["7961887"] = await client.fields.create("1530787", {
      label: "Color",
      field_type: "color",
      api_key: "color",
      appearance: {
        addons: [],
        editor: "color_picker",
        parameters: { enable_alpha: false, preset_colors: [] },
      },
      default_value: null,
    });
  } catch (error) {
    console.log("ALREADY EXISTS");
  }

  console.log(
    'Create SEO meta tags field "SEO" (`seo`) in model "Categoria Workshop" (`workshop_category`)'
  );
  newFields["12359560"] = await client.fields.create("1530787", {
    label: "SEO",
    field_type: "seo",
    api_key: "seo",
    localized: true,
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: { addons: [], editor: "seo", parameters: {} },
  });

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Modular content field "Sections" (`sections`) in model "Footer" (`footer`)'
  );
  await client.fields.update("754270", {
    appearance: {
      addons: [],
      editor: "rich_text",
      parameters: { start_collapsed: true },
    },
  });

  console.log(
    'Update Modular content field "Socials" (`socials`) in model "Footer" (`footer`)'
  );
  await client.fields.update("754271", {
    appearance: {
      addons: [],
      editor: "rich_text",
      parameters: { start_collapsed: true },
    },
  });

  console.log(
    'Update Multiple-paragraph text field "Info" (`info`) in model "Footer" (`footer`)'
  );
  await client.fields.update("754272", { label: "Info" });

  console.log(
    'Update Integer number field "Anno" (`year`) in model "Anno" (`year`)'
  );
  await client.fields.update("754273", { label: "Anno", position: 3 });

  console.log(
    'Update Single-line string field "Titolo" (`title`) in model "Anno" (`year`)'
  );
  await client.fields.update("754274", {
    label: "Titolo",
    validators: { required: {}, unique: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: true },
      type: "title",
    },
  });

  // console.log(
  //   'Update Multiple links field "Anni" (`years`) in model "Artista" (`artist`)'
  // );
  // await client.fields.update("754276", {
  //   label: "Anni",
  //   api_key: "years",
  //   hint: "In quali anni \u00E8 stato associato",
  //   position: 3,
  //   fieldset: newFieldsets["865774"],
  // });

  console.log(
    'Update Multiple links field "Related Contents" (`related_contents`) in model "Artista" (`artist`)'
  );
  await client.fields.update("754277", {
    position: 0,
    fieldset: newFieldsets["865774"],
  });

  console.log(
    'Update Multiple links field "Paese" (`countries`) in model "Artista" (`artist`)'
  );
  await client.fields.update(newFields["12372280"], { position: 4 });

  console.log('Update fieldset "SEO" in model "Artista" (`artist`)');
  await client.fieldsets.update("53349", { position: 6 });

  console.log('Update fieldset "Opzioni" in model "Artista" (`artist`)');
  await client.fieldsets.update(newFieldsets["865773"], { position: 3 });

  console.log(
    'Update Boolean field "Mostra nel sito" (`show_in_website`) in model "Artista" (`artist`)'
  );
  await client.fields.update(newFields["12353329"], { position: 0 });

  console.log('Update fieldset "Contenuti" in model "Artista" (`artist`)');
  await client.fieldsets.update("53346", { title: "Contenuti" });

  console.log(
    'Update Asset gallery field "Slideshow" (`slideshow_hero`) in model "Artista" (`artist`)'
  );
  await client.fields.update("754282", { position: 3 });

  console.log(
    'Update Single asset field "Immagine" (`image_hero`) in model "Artista" (`artist`)'
  );
  await client.fields.update("754285", { validators: {}, position: 2 });

  console.log(
    'Update Single-line string field "Testo" (`title`) in block model "Slide" (`slide`)'
  );
  await client.fields.update("754289", { label: "Testo" });

  console.log(
    'Update Single asset field "Immagine" (`image`) in block model "Slide" (`slide`)'
  );
  await client.fields.update("754290", { label: "Immagine" });

  console.log(
    'Update Single link field "section_link" (`section_link`) in block model "Home Section" (`home_section`)'
  );
  await client.fields.update("754291", {
    validators: {
      item_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [
          "148639",
          "148649",
          "148650",
          "148651",
          "148656",
          "148657",
          "189821",
          newItemTypes["2386402"].id,
          newItemTypes["2386539"].id,
          newItemTypes["2386540"].id,
          newItemTypes["2386541"].id,
          newItemTypes["2386724"].id,
          newItemTypes["2386725"].id,
        ],
      },
      required: {},
    },
  });

  console.log(
    'Update Slug field "Slug" (`slug`) in model "Menu Item" (`menu_item`)'
  );
  await client.fields.update("754413", {
    hint: "Viene utilizzato solamente se non c'\u00E8 una pagina associata (link)",
    validators: {
      slug_title_field: { title_field_id: "754299" },
      slug_format: { predefined_pattern: "webpage_slug" },
    },
    position: 4,
  });

  console.log(
    'Update Single-line string field "Sottotitolo" (`subtitle`) in model "Menu Item" (`menu_item`)'
  );
  await client.fields.update(newFields["12373878"], { position: 2 });

  console.log(
    'Update Single link field "Link" (`link`) in model "Menu Item" (`menu_item`)'
  );
  await client.fields.update("754298", {
    label: "Link",
    validators: {
      item_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [
          "148648",
          "148650",
          newItemTypes["2382191"].id,
          newItemTypes["2386402"].id,
          newItemTypes["2386539"].id,
          newItemTypes["2386540"].id,
          newItemTypes["2386541"].id,
          newItemTypes["2386724"].id,
          newItemTypes["2386725"].id,
          newItemTypes["2386727"].id,
        ],
      },
    },
  });

  console.log(
    'Update Single-line string field "Titolo" (`title`) in model "Menu Item" (`menu_item`)'
  );
  await client.fields.update("754299", { label: "Titolo" });

  console.log(
    'Update Single-line string field "URL" (`url`) in block model "Partner" (`partner`)'
  );
  await client.fields.update("754304", { label: "URL" });

  console.log(
    'Update SEO meta tags field "SEO" (`seo`) in model "Homepage" (`home`)'
  );
  await client.fields.update("754312", { position: 1 });

  console.log(
    'Update Modular content field "Slideshow Iniziale" (`home_slideshow`) in model "Homepage" (`home`)'
  );
  await client.fields.update("754308", {
    appearance: {
      addons: [],
      editor: "rich_text",
      parameters: { start_collapsed: true },
    },
  });

  console.log(
    'Update Multiple links field "Contenuti correlati" (`related_contents`) in model "Progetto" (`project`)'
  );
  await client.fields.update("754314", {
    position: 0,
    fieldset: newFieldsets["865838"],
  });

  console.log(
    'Update Multiple links field "Tags" (`category`) in model "Progetto" (`project`)'
  );
  await client.fields.update("754323", {
    label: "Tags",
    position: 1,
    fieldset: newFieldsets["865838"],
  });

  console.log(
    'Update Slug field "Slug" (`slug`) in model "Progetto" (`project`)'
  );
  await client.fields.update("754415", { position: 2 });

  console.log('Update fieldset "Relazioni" in model "Progetto" (`project`)');
  await client.fieldsets.update(newFieldsets["865838"], { position: 6 });

  console.log(
    'Update Structured text field "Contenuto principale" (`content`) in model "Progetto" (`project`)'
  );
  await client.fields.update("754324", {
    label: "Contenuto principale",
    validators: {
      structured_text_blocks: { item_types: ["148653", "148658", "148659"] },
      structured_text_links: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [
          "148639",
          "148649",
          "148650",
          "148651",
          "148656",
          "148657",
          "189821",
        ],
      },
    },
  });

  console.log(
    'Update SEO meta tags field "SEO" (`seo`) in model "Progetto" (`project`)'
  );
  await client.fields.update("754328", { position: 7 });

  console.log(
    'Update Multiple links field "Anni" (`years`) in model "Progetto" (`project`)'
  );
  await client.fields.update(newFields["12373055"], { position: 2 });

  console.log(
    'Update Multiple links field "Reti" (`networks`) in model "Progetto" (`project`)'
  );
  await client.fields.update(newFields["12373056"], { position: 3 });

  console.log(
    'Update fieldset "Date e opzioni" in model "Progetto" (`project`)'
  );
  await client.fieldsets.update("53354", { title: "Date e opzioni" });

  console.log('Update fieldset "Contenuti" in model "Progetto" (`project`)');
  await client.fieldsets.update("53355", { title: "Contenuti", position: 5 });

  console.log(
    'Update Single asset field "Immagine" (`image_hero`) in model "Progetto" (`project`)'
  );
  await client.fields.update("754326", { validators: {} });

  console.log(
    'Update Single-line string field "Section" (`section`) in model "Pagina" (`page`)'
  );
  await client.fields.update(newFields["Il72lmX2TluCMQylyACJFQ"], {
    position: 1,
  });

  console.log(
    'Update Multiple links field "Contenuti correlati" (`related_contents`) in model "Workshop" (`workshop`)'
  );
  await client.fields.update("754356", {
    position: 0,
    fieldset: newFieldsets["865769"],
  });

  console.log(
    'Update Multiple links field "Tags" (`category`) in model "Workshop" (`workshop`)'
  );
  await client.fields.update("754345", {
    label: "Tags",
    position: 2,
    fieldset: newFieldsets["865769"],
  });

  console.log(
    'Update Multiple links field "Categorie" (`workshop_category`) in model "Workshop" (`workshop`)'
  );
  await client.fields.update("7961900", {
    label: "Categorie",
    position: 1,
    fieldset: newFieldsets["865769"],
  });

  console.log(
    'Update Slug field "Slug" (`slug`) in model "Workshop" (`workshop`)'
  );
  await client.fields.update("754411", { position: 2 });

  console.log(
    'Update Boolean field "Mostra nel sito" (`show_in_website`) in model "Workshop" (`workshop`)'
  );
  await client.fields.update(newFields["12372250"], { position: 1 });

  console.log(
    'Update Structured text field "Contenuto principale" (`content`) in model "Workshop" (`workshop`)'
  );
  await client.fields.update("754355", {
    label: "Contenuto principale",
    validators: {
      structured_text_blocks: { item_types: ["148653", "148658", "148659"] },
      structured_text_links: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [
          "148639",
          "148649",
          "148650",
          "148651",
          "148656",
          "148657",
          "189821",
        ],
      },
    },
  });

  console.log(
    'Update Multiple links field "Anni" (`years`) in model "Workshop" (`workshop`)'
  );
  await client.fields.update(newFields["12372251"], { position: 3 });

  console.log(
    'Update Multiple links field "Artisti" (`artists`) in model "Workshop" (`workshop`)'
  );
  await client.fields.update(newFields["12372252"], { position: 5 });

  console.log(
    'Update Multiple links field "Compagnie" (`companies`) in model "Workshop" (`workshop`)'
  );
  await client.fields.update(newFields["12372253"], { position: 6 });

  console.log(
    'Update Multiple links field "Resisenze artistiche" (`artistic_residecies`) in model "Workshop" (`workshop`)'
  );
  await client.fields.update(newFields["12372255"], { position: 7 });

  console.log(
    'Update Multiple links field "Workhops" (`workhops`) in model "Workshop" (`workshop`)'
  );
  await client.fields.update(newFields["12372256"], { position: 8 });

  console.log(
    'Update Multiple links field "Edizioni festival" (`festival_editions`) in model "Workshop" (`workshop`)'
  );
  await client.fields.update(newFields["12372257"], { position: 4 });

  console.log(
    'Update Multiple links field "Progetti" (`projects`) in model "Workshop" (`workshop`)'
  );
  await client.fields.update(newFields["12372258"], { position: 9 });

  console.log('Update fieldset "Relazioni" in model "Workshop" (`workshop`)');
  await client.fieldsets.update(newFieldsets["865769"], { position: 6 });

  console.log(
    'Update SEO meta tags field "SEO" (`seo`) in model "Workshop" (`workshop`)'
  );
  await client.fields.update("754357", { position: 7 });

  console.log('Update fieldset "Contenuti" in model "Workshop" (`workshop`)');
  await client.fieldsets.update("53363", { title: "Contenuti", position: 5 });

  console.log(
    'Update fieldset "Date e opzioni" in model "Workshop" (`workshop`)'
  );
  await client.fieldsets.update("53364", {
    title: "Date e opzioni",
    position: 4,
  });

  console.log(
    'Update Boolean field "Workshop" (`is_workshop`) in model "Workshop" (`workshop`)'
  );
  await client.fields.update("754344", { label: "Workshop" });

  console.log(
    'Update Single asset field "Immagine" (`image_hero`) in model "Workshop" (`workshop`)'
  );
  await client.fields.update("754359", { validators: {} });

  console.log(
    'Update Multiple links field "Contenuti correlati" (`related_contents`) in model "Evento" (`event`)'
  );
  await client.fields.update("754387", {
    position: 0,
    fieldset: newFieldsets["865720"],
  });

  console.log(
    'Update Multiple links field "Tags" (`category`) in model "Evento" (`event`)'
  );
  await client.fields.update("754374", {
    label: "Tags",
    position: 1,
    fieldset: newFieldsets["865720"],
  });

  console.log('Update Slug field "Slug" (`slug`) in model "Evento" (`event`)');
  await client.fields.update("754410", { position: 2 });

  console.log(
    'Update Boolean field "Mostra nel sito" (`show_in_website`) in model "Evento" (`event`)'
  );
  await client.fields.update(newFields["12371612"], { position: 2 });

  console.log(
    'Update Boolean field "Co-produzione" (`is_co_production`) in model "Evento" (`event`)'
  );
  await client.fields.update(newFields["12371613"], { position: 1 });

  console.log(
    'Update Date field "Data riferimento" (`start_date`) in model "Evento" (`event`)'
  );
  await client.fields.update("754375", { position: 3 });

  console.log(
    'Update Modular content field "Date Evento" (`dates`) in model "Evento" (`event`)'
  );
  await client.fields.update("754378", {
    appearance: {
      addons: [],
      editor: "rich_text",
      parameters: { start_collapsed: true },
    },
  });

  console.log(
    'Update Modular content field "Impostazioni Pagamento" (`payment_settings`) in model "Evento" (`event`)'
  );
  await client.fields.update("754384", {
    appearance: {
      addons: [],
      editor: "rich_text",
      parameters: { start_collapsed: true },
    },
  });

  console.log('Update fieldset "Relazioni" in model "Evento" (`event`)');
  await client.fieldsets.update(newFieldsets["865720"], { position: 6 });

  console.log(
    'Update Structured text field "Contenuto principale" (`content`) in model "Evento" (`event`)'
  );
  await client.fields.update("754382", {
    label: "Contenuto principale",
    validators: {
      structured_text_blocks: { item_types: ["148653", "148658", "148659"] },
      structured_text_links: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [
          "148639",
          "148649",
          "148650",
          "148651",
          "148656",
          "148657",
          "189821",
        ],
      },
    },
  });

  console.log(
    'Update SEO meta tags field "SEO" (`seo`) in model "Evento" (`event`)'
  );
  await client.fields.update("754389", { position: 7 });

  console.log(
    'Update Multiple links field "Anni" (`years`) in model "Evento" (`event`)'
  );
  await client.fields.update(newFields["12371614"], { position: 2 });

  console.log(
    'Update Multiple links field "Edizioni festival" (`festival_editions`) in model "Evento" (`event`)'
  );
  await client.fields.update(newFields["12371615"], { position: 3 });

  console.log(
    'Update Multiple links field "Artisti" (`artists`) in model "Evento" (`event`)'
  );
  await client.fields.update(newFields["12371616"], { position: 4 });

  console.log(
    'Update Multiple links field "Compagnie" (`companies`) in model "Evento" (`event`)'
  );
  await client.fields.update(newFields["12371617"], { position: 5 });

  console.log(
    'Update Multiple links field "Workhops" (`workhops`) in model "Evento" (`event`)'
  );
  await client.fields.update(newFields["12371618"], { position: 7 });

  console.log(
    'Update Multiple links field "Progetti" (`projects`) in model "Evento" (`event`)'
  );
  await client.fields.update(newFields["12371619"], { position: 8 });

  console.log(
    'Update Multiple links field "Residenze artistiche" (`artistic_residecies`) in model "Evento" (`event`)'
  );
  await client.fields.update(newFields["12372254"], { position: 6 });

  console.log('Update fieldset "Date e opzioni" in model "Evento" (`event`)');
  await client.fieldsets.update("53365", { title: "Date e opzioni" });

  console.log('Update fieldset "Contenuti" in model "Evento" (`event`)');
  await client.fieldsets.update("53366", { title: "Contenuti", position: 5 });

  console.log('Update fieldset "Hero" in model "Evento" (`event`)');
  await client.fieldsets.update("53368", { position: 3 });

  console.log(
    'Update Single asset field "Immagine" (`image_hero`) in model "Evento" (`event`)'
  );
  await client.fields.update("754386", { validators: {} });

  console.log(
    'Update Multiple links field "Tags" (`category`) in model "News" (`news`)'
  );
  await client.fields.update("754396", {
    label: "Tags",
    position: 0,
    fieldset: newFieldsets["865771"],
  });

  // console.log(
  //   'Update Date field "Data Riferimento" (`start_date`) in model "News" (`news`)'
  // );
  // await client.fields.update("754391", { fieldset: newFieldsets["865770"] });

  console.log('Update Slug field "Slug" (`slug`) in model "News" (`news`)');
  await client.fields.update("754409", { position: 2 });

  console.log(
    'Update Structured text field "Contenuto principale" (`content`) in model "News" (`news`)'
  );
  await client.fields.update("754390", {
    label: "Contenuto principale",
    validators: {
      structured_text_blocks: { item_types: ["148653", "148658", "148659"] },
      structured_text_links: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [
          "148639",
          "148649",
          "148650",
          "148651",
          "148656",
          "148657",
          "189821",
        ],
      },
    },
  });

  console.log('Update fieldset "Contenuti" in model "News" (`news`)');
  await client.fieldsets.update("53370", { title: "Contenuti", position: 5 });

  console.log('Update fieldset "Relazioni" in model "News" (`news`)');
  await client.fieldsets.update(newFieldsets["865771"], { position: 6 });

  console.log(
    'Update SEO meta tags field "SEO" (`seo`) in model "News" (`news`)'
  );
  await client.fields.update("754398", { position: 7 });

  console.log('Update fieldset "Date e opzioni" in model "News" (`news`)');
  await client.fieldsets.update(newFieldsets["865770"], { position: 4 });

  console.log(
    'Update Single asset field "Immagine" (`image_hero`) in model "News" (`news`)'
  );
  await client.fields.update("754397", { validators: {} });

  console.log(
    'Update Multiple links field "Anni" (`years`) in model "News" (`news`)'
  );
  await client.fields.update(newFields["12372265"], { position: 1 });

  console.log(
    'Update Boolean field "Mostra in archivio" (`show_in_archive`) in model "News" (`news`)'
  );
  await client.fields.update(newFields["12372268"], { position: 1 });

  console.log(
    'Update Multiple links field "Edizioni festival" (`festival_editions`) in model "News" (`news`)'
  );
  await client.fields.update(newFields["12372270"], { position: 2 });

  console.log(
    'Update Multiple links field "Artisti" (`artists`) in model "News" (`news`)'
  );
  await client.fields.update(newFields["12372271"], { position: 3 });

  console.log(
    'Update Multiple links field "Compagnie" (`comoanies`) in model "News" (`news`)'
  );
  await client.fields.update(newFields["12372273"], { position: 4 });

  console.log(
    'Update Multiple links field "Workhops" (`workhops`) in model "News" (`news`)'
  );
  await client.fields.update(newFields["12372274"], { position: 6 });

  console.log(
    'Update Multiple links field "Residenze artistiche" (`artistic_residencies`) in model "News" (`news`)'
  );
  await client.fields.update(newFields["12372278"], { position: 5 });

  console.log(
    'Update Multiple links field "Eventi" (`events`) in model "News" (`news`)'
  );
  await client.fields.update(newFields["12372279"], { position: 7 });

  console.log(
    'Update Multiple links field "Contenuti correlati" (`related_contents`) in model "Rete" (`network`)'
  );
  await client.fields.update("965871", {
    position: 0,
    fieldset: newFieldsets["865839"],
  });

  console.log(
    'Update Multiple links field "Tags" (`category`) in model "Rete" (`network`)'
  );
  await client.fields.update("965862", {
    label: "Tags",
    position: 1,
    fieldset: newFieldsets["865839"],
  });

  console.log('Update Slug field "Slug" (`slug`) in model "Rete" (`network`)');
  await client.fields.update("965873", { position: 2 });

  console.log(
    'Update Boolean field "Mostra nel sito" (`show_in_website`) in model "Rete" (`network`)'
  );
  await client.fields.update(newFields["12373774"], { position: 0 });

  console.log('Update fieldset "Relazioni" in model "Rete" (`network`)');
  await client.fieldsets.update(newFieldsets["865839"], { position: 6 });

  console.log(
    'Update SEO meta tags field "SEO" (`seo`) in model "Rete" (`network`)'
  );
  await client.fields.update("965857", { position: 7 });

  console.log(
    'Update Structured text field "Contenuto principale" (`content`) in model "Rete" (`network`)'
  );
  await client.fields.update("965861", {
    label: "Contenuto principale",
    validators: {
      structured_text_blocks: { item_types: ["148653", "148658", "148659"] },
      structured_text_links: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [
          "148639",
          "148649",
          "148650",
          "148651",
          "148656",
          "148657",
          "189821",
        ],
      },
    },
  });

  console.log(
    'Update Multiple links field "Anni" (`years`) in model "Rete" (`network`)'
  );
  await client.fields.update(newFields["12373060"], { position: 2 });

  console.log('Update fieldset "Contenuti" in model "Rete" (`network`)');
  await client.fieldsets.update("68401", { title: "Contenuti", position: 5 });

  console.log('Update fieldset "Date e opzioni" in model "Rete" (`network`)');
  await client.fieldsets.update("68402", {
    title: "Date e opzioni",
    position: 4,
  });

  console.log('Update fieldset "Hero/Preview" in model "Rete" (`network`)');
  await client.fieldsets.update("68403", { position: 3 });

  console.log(
    'Update Single asset field "Immagine" (`image_hero`) in model "Rete" (`network`)'
  );
  await client.fields.update("965859", { validators: {} });

  console.log(
    'Update Single-line string field "Titolo" (`title`) in model "Categoria Workshop" (`workshop_category`)'
  );
  await client.fields.update("7961888", { label: "Titolo" });

  console.log(
    'Update Single asset field "Hover Image" (`over_image`) in model "Categoria Workshop" (`workshop_category`)'
  );
  await client.fields.update("7961890", {
    label: "Hover Image",
    validators: {
      required: {},
      extension: { extensions: [], predefined_list: "transformable_image" },
    },
  });

  console.log(
    'Update Slug field "Slug" (`slug`) in model "Categoria Workshop" (`workshop_category`)'
  );
  await client.fields.update("7961891", {
    label: "Slug",
    localized: true,
    default_value: { it: null, en: null },
  });

  console.log("Finalize models/block models");

  console.log('Update model "Edizione Festival" (`festival_edition`)');
  await client.itemTypes.update(newItemTypes["2382191"], {
    title_field: newFields["12353896"],
    image_preview_field: newFields["12373772"],
  });

  console.log('Update model "Residenza Artistica" (`artistic_residecy`)');
  await client.itemTypes.update(newItemTypes["2382769"], {
    title_field: newFields["12357552"],
    image_preview_field: newFields["12358069"],
  });

  console.log('Update model "Paese" (`country`)');
  await client.itemTypes.update(newItemTypes["2383134"], {
    title_field: newFields["12358788"],
  });

  console.log('Update model "Compagnia" (`company`)');
  await client.itemTypes.update(newItemTypes["2383186"], {
    title_field: newFields["12358966"],
    image_preview_field: newFields["12358961"],
  });

  console.log('Update model "Autore Media" (`media_author`)');
  await client.itemTypes.update(newItemTypes["2383203"], {
    title_field: newFields["12359025"],
  });

  console.log('Update model "Pubblicazione" (`publication`)');
  await client.itemTypes.update(newItemTypes["2386114"], {
    title_field: newFields["12372912"],
  });

  console.log('Update model "Categoria Media Foto" (`media_photo_category`)');
  await client.itemTypes.update(newItemTypes["2386223"], {
    // ordering_field: newFields["12373333"],
    title_field: newFields["12373333"],
  });

  console.log(
    'Update model "Categoria Media Documento " (`media_document_category`)'
  );
  await client.itemTypes.update(newItemTypes["2386225"], {
    // ordering_field: newFields["12373337"],
    title_field: newFields["12373337"],
  });

  console.log('Update model "Categoria Media Video" (`media_video_category`)');
  await client.itemTypes.update(newItemTypes["2386227"], {
    // ordering_field: newFields["12373339"],
    title_field: newFields["12373339"],
  });

  console.log('Update model "Media Video" (`media_video`)');
  await client.itemTypes.update(newItemTypes["2386232"], {
    // ordering_field: newFields["12373363"],
    title_field: newFields["12373363"],
  });

  console.log('Update model "Media Documento" (`media_document`)');
  await client.itemTypes.update(newItemTypes["2386253"], {
    // ordering_field: newFields["12373451"],
    title_field: newFields["12373451"],
  });

  console.log('Update model "Media Audio" (`media_audio`)');
  await client.itemTypes.update(newItemTypes["2386254"], {
    // ordering_field: newFields["12373477"],
    title_field: newFields["12373477"],
  });

  console.log('Update model "Categoria Media Audio" (`media_audio_category`)');
  await client.itemTypes.update(newItemTypes["2386255"], {
    // ordering_field: newFields["12373485"],
    title_field: newFields["12373485"],
  });

  console.log('Update model "Archivio Media" (`media_archive`)');
  await client.itemTypes.update(newItemTypes["2386354"], {
    title_field: newFields["12373880"],
  });

  console.log('Update model "Archivio Festival" (`festival_editions_archive`)');
  await client.itemTypes.update(newItemTypes["2386355"], {
    title_field: newFields["12373885"],
  });

  console.log(
    'Update model "Archivio Artisti e Compagnie" (`artists_companies_archive`)'
  );
  await client.itemTypes.update(newItemTypes["2386356"], {
    title_field: newFields["12373889"],
  });

  console.log('Update model "Archivio Attivit\u00E0" (`activities_archive`)');
  await client.itemTypes.update(newItemTypes["2386357"], {
    title_field: newFields["12373892"],
  });

  console.log(
    'Update model "Archivio News e Pubblicazioni" (`news_publications_archive`)'
  );
  await client.itemTypes.update(newItemTypes["2386358"], {
    title_field: newFields["12373895"],
  });

  console.log(
    'Update model "Archivio Partner e Reti" (`pertners_networks_archive`)'
  );
  await client.itemTypes.update(newItemTypes["2386359"], {
    title_field: newFields["12373898"],
  });

  console.log('Update model "Archivio Anni" (`years_archive`)');
  await client.itemTypes.update(newItemTypes["2386360"], {
    title_field: newFields["12373902"],
  });

  console.log('Update model "Indice News" (`news_index`)');
  await client.itemTypes.update(newItemTypes["2386402"], {
    title_field: newFields["12374002"],
  });

  console.log('Update model "Indice Video" (`videos_index`)');
  await client.itemTypes.update(newItemTypes["2386537"], {
    title_field: newFields["12374349"],
  });

  console.log('Update model "Indice Audio" (`audios_index`)');
  await client.itemTypes.update(newItemTypes["2386538"], {
    title_field: newFields["12374352"],
  });

  console.log('Update model "Indice Eventi" (`events_index`)');
  await client.itemTypes.update(newItemTypes["2386539"], {
    title_field: newFields["12374355"],
  });

  console.log('Update model "Indice Progetti" (`projects_index`)');
  await client.itemTypes.update(newItemTypes["2386540"], {
    title_field: newFields["12374358"],
  });

  console.log('Update model "Indice Reti" (`networks_index`)');
  await client.itemTypes.update(newItemTypes["2386541"], {
    title_field: newFields["12374361"],
  });

  console.log('Update model "Indice Artisti" (`artists_index`)');
  await client.itemTypes.update(newItemTypes["2386724"], {
    title_field: newFields["12375393"],
  });

  console.log(
    'Update model "Indice Residenze Artistiche" (`artistic_residencies_index`)'
  );
  await client.itemTypes.update(newItemTypes["2386725"], {
    title_field: newFields["12375405"],
  });

  console.log('Update model "Formazione" (`education_page`)');
  await client.itemTypes.update(newItemTypes["2386727"], {
    title_field: newFields["12375421"],
  });

  console.log('Update model "Partner Model" (`partner_model`)');
  await client.itemTypes.update(newItemTypes["2404420"], {
    title_field: newFields["12460159"],
    image_preview_field: newFields["12460166"],
  });

  console.log('Update model "Anno" (`year`)');
  await client.itemTypes.update("148638", {
    name: "Anno",
    inverse_relationships_enabled: true,
    // ordering_field: { id: "754273", type: "field" },
  });

  console.log('Update model "Artista" (`artist`)');
  await client.itemTypes.update("148639", {
    all_locales_required: true,
    inverse_relationships_enabled: true,
  });

  console.log('Update model "Progetto" (`project`)');
  await client.itemTypes.update("148649", {
    all_locales_required: true,
    inverse_relationships_enabled: true,
  });

  console.log('Update model "Workshop" (`workshop`)');
  await client.itemTypes.update("148651", {
    inverse_relationships_enabled: true,
  });

  console.log('Update model "Evento" (`event`)');
  await client.itemTypes.update("148656", {
    inverse_relationships_enabled: true,
  });

  console.log('Update model "News" (`news`)');
  await client.itemTypes.update("148657", {
    inverse_relationships_enabled: true,
  });

  console.log('Update model "Rete" (`network`)');
  await client.itemTypes.update("189821", {
    all_locales_required: true,
    inverse_relationships_enabled: true,
  });

  console.log('Update model "Categoria Workshop" (`workshop_category`)');
  await client.itemTypes.update("1530787", {
    name: "Categoria Workshop",
    sortable: true,
    inverse_relationships_enabled: true,
  });
}
