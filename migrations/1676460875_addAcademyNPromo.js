'use strict';

/** @param client { import("@datocms/cli/lib/cma-client-node").Client } */
module.exports = async function (client) {
  const newFields = {};
  const newItemTypes = {};
  const newMenuItems = {};

  console.log('Create new models/block models');

  console.log('Create model "Workshop Category" (`workshop_category`)');
  newItemTypes['1333068'] = await client.itemTypes.create(
    {
      name: 'Workshop Category',
      api_key: 'workshop_category',
      all_locales_required: true,
      collection_appearance: 'table',
      inverse_relationships_enabled: false,
    },
    { skip_menu_item_creation: 'true' }
  );

  console.log(
    'Create block model "Blocco Categorie Workshop" (`workshop_categories_block`)'
  );
  newItemTypes['1333195'] = await client.itemTypes.create(
    {
      name: 'Blocco Categorie Workshop',
      api_key: 'workshop_categories_block',
      modular_block: true,
      inverse_relationships_enabled: false,
    },
    { skip_menu_item_creation: 'true' }
  );

  console.log('Create model "Promobox" (`promobox`)');
  newItemTypes['1392153'] = await client.itemTypes.create(
    {
      name: 'Promobox',
      api_key: 'promobox',
      all_locales_required: true,
      collection_appearance: 'table',
      inverse_relationships_enabled: false,
    },
    { skip_menu_item_creation: 'true' }
  );

  console.log('Create block model "Promozioni" (`promozioni_block`)');
  newItemTypes['1392154'] = await client.itemTypes.create(
    {
      name: 'Promozioni',
      api_key: 'promozioni_block',
      modular_block: true,
      inverse_relationships_enabled: false,
    },
    { skip_menu_item_creation: 'true' }
  );

  console.log('Creating new fields/fieldsets');

  console.log(
    'Create Color field "Color" (`color`) in model "Workshop Category" (`workshop_category`)'
  );
  newFields['6985795'] = await client.fields.create(newItemTypes['1333068'], {
    label: 'Color',
    field_type: 'color',
    api_key: 'color',
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: 'color_picker',
      parameters: { enable_alpha: false, preset_colors: [] },
    },
    default_value: { red: 245, green: 11, blue: 11, alpha: 255 },
  });

  console.log(
    'Create Single-line string field "Title" (`title`) in model "Workshop Category" (`workshop_category`)'
  );
  newFields['6985792'] = await client.fields.create(newItemTypes['1333068'], {
    label: 'Title',
    field_type: 'string',
    api_key: 'title',
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: 'single_line',
      parameters: { heading: false },
    },
    default_value: { it: '', en: '' },
  });

  console.log(
    'Create Single-line string field "Description" (`description`) in model "Workshop Category" (`workshop_category`)'
  );
  newFields['6985794'] = await client.fields.create(newItemTypes['1333068'], {
    label: 'Description',
    field_type: 'string',
    api_key: 'description',
    localized: true,
    appearance: {
      addons: [],
      editor: 'single_line',
      parameters: { heading: false },
    },
    default_value: { it: '', en: '' },
  });

  console.log(
    'Create Slug field "slug" (`slug`) in model "Workshop Category" (`workshop_category`)'
  );
  newFields['6985793'] = await client.fields.create(newItemTypes['1333068'], {
    label: 'slug',
    field_type: 'slug',
    api_key: 'slug',
    validators: {
      slug_title_field: { title_field_id: newFields['6985792'].id },
      slug_format: { predefined_pattern: 'webpage_slug' },
      required: {},
      unique: {},
    },
    appearance: {
      addons: [],
      editor: 'slug',
      parameters: { url_prefix: null },
    },
  });

  console.log(
    'Create Multiple links field "Categoria" (`category`) in block model "Blocco Categorie Workshop" (`workshop_categories_block`)'
  );
  newFields['6986255'] = await client.fields.create(newItemTypes['1333195'], {
    label: 'Categoria',
    field_type: 'links',
    api_key: 'category',
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: 'fail',
        on_reference_unpublish_strategy: 'delete_references',
        on_reference_delete_strategy: 'delete_references',
        item_types: [newItemTypes['1333068'].id],
      },
    },
    appearance: { addons: [], editor: 'links_embed', parameters: {} },
  });

  console.log(
    'Create Boolean field "Promobox Header Color" (`header_color`) in model "Promobox" (`promobox`)'
  );
  newFields['7357366'] = await client.fields.create(newItemTypes['1392153'], {
    label: 'Promobox Header Color',
    field_type: 'boolean',
    api_key: 'header_color',
    hint: "Colore chiaro / scuro dell'header del box",
    appearance: {
      addons: [],
      editor: 'boolean_radio_group',
      parameters: {
        negative_radio: { hint: null, label: 'Dark' },
        positive_radio: { hint: '', label: 'Light' },
      },
    },
    default_value: true,
  });

  console.log(
    'Create Single-line string field "Title" (`title`) in model "Promobox" (`promobox`)'
  );
  newFields['7273287'] = await client.fields.create(newItemTypes['1392153'], {
    label: 'Title',
    field_type: 'string',
    api_key: 'title',
    localized: true,
    appearance: {
      addons: [],
      editor: 'single_line',
      parameters: { heading: false },
    },
    default_value: { it: '', en: '' },
  });

  console.log(
    'Create Single-line string field "Subtitle" (`subtitle`) in model "Promobox" (`promobox`)'
  );
  newFields['7273286'] = await client.fields.create(newItemTypes['1392153'], {
    label: 'Subtitle',
    field_type: 'string',
    api_key: 'subtitle',
    localized: true,
    appearance: {
      addons: [],
      editor: 'single_line',
      parameters: { heading: false },
    },
    default_value: { it: '', en: '' },
  });

  console.log(
    'Create Multiple-paragraph text field "Text" (`text`) in model "Promobox" (`promobox`)'
  );
  newFields['7273288'] = await client.fields.create(newItemTypes['1392153'], {
    label: 'Text',
    field_type: 'text',
    api_key: 'text',
    localized: true,
    appearance: {
      addons: [],
      editor: 'wysiwyg',
      parameters: {
        toolbar: [
          'format',
          'bold',
          'italic',
          'strikethrough',
          'ordered_list',
          'unordered_list',
          'quote',
          'table',
          'link',
          'image',
          'show_source',
          'fullscreen',
        ],
      },
      type: 'wysiwyg',
    },
    default_value: { it: '', en: '' },
  });

  console.log(
    'Create Single-line string field "Link" (`link`) in model "Promobox" (`promobox`)'
  );
  newFields['7273289'] = await client.fields.create(newItemTypes['1392153'], {
    label: 'Link',
    field_type: 'string',
    api_key: 'link',
    appearance: {
      addons: [],
      editor: 'single_line',
      parameters: { heading: false },
    },
    default_value: '',
  });

  console.log(
    'Create Multiple links field "Promozione" (`promozione`) in block model "Promozioni" (`promozioni_block`)'
  );
  newFields['7273290'] = await client.fields.create(newItemTypes['1392154'], {
    label: 'Promozione',
    field_type: 'links',
    api_key: 'promozione',
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: 'fail',
        on_reference_unpublish_strategy: 'delete_references',
        on_reference_delete_strategy: 'delete_references',
        item_types: [newItemTypes['1392153'].id],
      },
    },
    appearance: { addons: [], editor: 'links_select', parameters: {} },
  });

  console.log(
    'Create Multiple links field "Workshop Category" (`workshop_category`) in model "Workshop" (`workshop`)'
  );
  newFields['7054177'] = await client.fields.create('148651', {
    label: 'Workshop Category',
    field_type: 'links',
    api_key: 'workshop_category',
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: 'fail',
        on_reference_unpublish_strategy: 'delete_references',
        on_reference_delete_strategy: 'delete_references',
        item_types: [newItemTypes['1333068'].id],
      },
    },
    appearance: { addons: [], editor: 'links_select', parameters: {} },
    fieldset: { id: '53363', type: 'fieldset' },
  });

  console.log('Update existing fields/fieldsets');

  console.log(
    'Update Structured text field "body" (`body`) in block model "Paragrafo con Titolo" (`anchor_block`)'
  );
  await client.fields.update('754296', {
    validators: {
      structured_text_blocks: {
        item_types: [
          '148647',
          '148653',
          '148658',
          '148659',
          newItemTypes['1333195'].id,
          newItemTypes['1392154'].id,
        ],
      },
      structured_text_links: {
        on_publish_with_unpublished_references_strategy: 'fail',
        on_reference_unpublish_strategy: 'delete_references',
        on_reference_delete_strategy: 'delete_references',
        item_types: [
          '148639',
          '148649',
          '148650',
          '148651',
          '148656',
          '148657',
          '189821',
        ],
      },
    },
  });

  console.log(
    'Update Single-line string field "Titolo" (`title`) in block model "Paragrafo con Titolo" (`anchor_block`)'
  );
  await client.fields.update('754297', { validators: {} });

  console.log(
    'Update Structured text field "Main Content" (`content`) in model "Pagina" (`page`)'
  );
  await client.fields.update('754337', {
    validators: {
      structured_text_blocks: {
        item_types: [
          '148647',
          '148653',
          '148658',
          '148659',
          newItemTypes['1333195'].id,
          newItemTypes['1392154'].id,
        ],
      },
      structured_text_links: {
        on_publish_with_unpublished_references_strategy: 'fail',
        on_reference_unpublish_strategy: 'delete_references',
        on_reference_delete_strategy: 'delete_references',
        item_types: [
          '148639',
          '148649',
          '148650',
          '148651',
          '148656',
          '148657',
          '189821',
        ],
      },
    },
  });

  console.log(
    'Update Multiple links field "Workshop Category" (`workshop_category`) in model "Workshop" (`workshop`)'
  );
  await client.fields.update(newFields['7054177'], { position: 0 });

  console.log(
    'Update Multiple links field "Tag" (`category`) in model "Workshop" (`workshop`)'
  );
  await client.fields.update('754345', {
    label: 'Tag',
    hint: 'Questo tag viene mostrato sulle card di preview ',
  });

  console.log('Finalize models/block models');

  console.log('Update model "Workshop Category" (`workshop_category`)');
  await client.itemTypes.update(newItemTypes['1333068'], {
    title_field: newFields['6985792'],
  });

  console.log('Update model "Promobox" (`promobox`)');
  await client.itemTypes.update(newItemTypes['1392153'], {
    title_field: newFields['7273286'],
  });

  console.log('Manage menu items');

  console.log('Create menu item "Workshop Categories"');
  newMenuItems['683440'] = await client.menuItems.create({
    label: 'Workshop Categories',
    item_type: newItemTypes['1333068'],
    parent: { id: '78649', type: 'menu_item' },
  });
};
