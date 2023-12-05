import { Client, SimpleSchemaTypes } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  const newFields: Record<string, SimpleSchemaTypes.Field> = {};
  const newMenuItems: Record<string, SimpleSchemaTypes.MenuItem> = {};

  console.log("Creating new fields/fieldsets");

  console.log(
    'Create DateTime field "Data di Creazione Media" (`creation_date`) in model "Media Documento" (`media_document`)'
  );
  newFields["Y4syvnQHS6KEcnbnlL9D0w"] = await client.fields.create(
    "IsKW8MWgS3yFV4HtkKVd4w",
    {
      label: "Data di Creazione Media",
      field_type: "date_time",
      api_key: "creation_date",
      validators: { required: {} },
      appearance: { addons: [], editor: "date_time_picker", parameters: {} },
      default_value: null,
    }
  );

  console.log(
    'Create DateTime field "Data di Creazione Media" (`creation_date`) in model "Media Audio" (`media_audio`)'
  );
  newFields["P6xQpRrZTtuHBQP1pOLU9Q"] = await client.fields.create(
    "NSeQimtDTkmBg2-z_uU5-w",
    {
      label: "Data di Creazione Media",
      field_type: "date_time",
      api_key: "creation_date",
      validators: { required: {} },
      appearance: { addons: [], editor: "date_time_picker", parameters: {} },
      default_value: null,
    }
  );

  console.log(
    'Create DateTime field "Data di Creazione Media" (`creation_date`) in model "Media Foto" (`media_photo`)'
  );
  newFields["YU96dhwqQ_29iiW-F4frwA"] = await client.fields.create(
    "Ql0phGMFSlGCJOgdpP4PDA",
    {
      label: "Data di Creazione Media",
      field_type: "date_time",
      api_key: "creation_date",
      validators: { required: {} },
      appearance: { addons: [], editor: "date_time_picker", parameters: {} },
      default_value: null,
    }
  );

  console.log(
    'Create DateTime field "Data di Creazione Media" (`creation_date`) in model "Media Video" (`media_video`)'
  );
  newFields["VXwtArjgQOWwX0kLiAnVmw"] = await client.fields.create(
    "QrFc7IEHRFyMUgSNCaKi0Q",
    {
      label: "Data di Creazione Media",
      field_type: "date_time",
      api_key: "creation_date",
      validators: { required: {} },
      appearance: { addons: [], editor: "date_time_picker", parameters: {} },
      default_value: null,
    }
  );

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Multiple links field "Immagini timeline" (`images`) in model "Anno" (`year`)'
  );
  await client.fields.update("LN1c4RVCSk-I-9Y2ZSnxZw", {
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["Ql0phGMFSlGCJOgdpP4PDA"],
      },
      size: { max: 5 },
    },
  });

  console.log(
    'Update Multiple links field "links" (`links`) in block model "Footer Section" (`footer_section`)'
  );
  await client.fields.update("754287", {
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [
          "148650",
          "DM2WStdaT8qL-WLHhP7EFQ",
          "NjpxmUkYTniNITef1nO64g",
          "XkZp3jEHQjCXKeeJhB14dQ",
          "c_6EnUBxQwuzI4ev_bp8zQ",
        ],
      },
    },
  });

  console.log(
    'Update Single link field "Link" (`link`) in model "Menu Item" (`menu_item`)'
  );
  await client.fields.update("754298", {
    validators: {
      item_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [
          "148648",
          "148650",
          "CSmPHaURTkq3rpwing7C0w",
          "CUux2iGnTK2g41tOglafpg",
          "DM2WStdaT8qL-WLHhP7EFQ",
          "HZcI0lIeRSuSJ4yvmyUaZQ",
          "JsDIfYCSTgiZDFqCTfiMyQ",
          "KCxx_3gSR5u8IA7GWPJQQg",
          "L71UvjLzTmeVCG34mS-x1g",
          "NjpxmUkYTniNITef1nO64g",
          "PwIjFzxsTbGhEYWRE81tUw",
          "WsUvFTfcTEOO13BLuKiv_Q",
          "XkZp3jEHQjCXKeeJhB14dQ",
          "ZqV-AG7eQzGHCOa88xa4Zg",
          "bu2ay-uHSpyiVfx-YFZ7Lw",
          "c_6EnUBxQwuzI4ev_bp8zQ",
          "eLC8Gf-QQae58aqUTKQGjw",
        ],
      },
    },
  });

  console.log(
    'Update Single-line string field "Section" (`section`) in model "Pagina" (`page`)'
  );
  await client.fields.update("CYaI6pSTSsK-0iiwRS3PlQ", {
    validators: {
      required: {},
      enum: { values: ["-", "Festival", "Info", "People", "Studio"] },
    },
    default_value: "-",
  });

  console.log(
    'Update Single-line string field "Titolo" (`title`) in model "Archivio News e Pubblicazioni" (`news_publications_archive`)'
  );
  await client.fields.update("dGxg3cq5RWmDoZWDPpz5zQ", {
    localized: true,
    default_value: { it: "", en: "" },
  });

  console.log(
    'Update DateTime field "Data di Creazione Media" (`creation_date`) in model "Media Documento" (`media_document`)'
  );
  await client.fields.update(newFields["Y4syvnQHS6KEcnbnlL9D0w"], {
    position: 6,
  });

  console.log(
    'Update fieldset "Relazioni" in model "Media Documento" (`media_document`)'
  );
  await client.fieldsets.update("D_nx3ox-Roi_LQWufoze4A", {
    collapsible: true,
    start_collapsed: true,
  });

  console.log(
    'Update Single-line string field "Titolo" (`title`) in model "Archivio Media" (`media_archive`)'
  );
  await client.fields.update("JB2hOOcuQg2ouTdXmARIcA", {
    localized: true,
    default_value: { it: "", en: "" },
  });

  console.log(
    'Update DateTime field "Data di Creazione Media" (`creation_date`) in model "Media Audio" (`media_audio`)'
  );
  await client.fields.update(newFields["P6xQpRrZTtuHBQP1pOLU9Q"], {
    position: 7,
  });

  console.log(
    'Update fieldset "Relazioni" in model "Media Audio" (`media_audio`)'
  );
  await client.fieldsets.update("QK1DXoD-T3W_h7EV1BvXkw", {
    collapsible: true,
    start_collapsed: true,
  });

  console.log(
    'Update Single-line string field "Titolo" (`title`) in model "Archivio Attivit\u00E0" (`activities_archive`)'
  );
  await client.fields.update("GfDhvYyuQjODsD-phlcc7w", {
    localized: true,
    default_value: { it: "", en: "" },
  });

  console.log(
    'Update DateTime field "Data di Creazione Media" (`creation_date`) in model "Media Foto" (`media_photo`)'
  );
  await client.fields.update(newFields["YU96dhwqQ_29iiW-F4frwA"], {
    position: 4,
  });

  console.log(
    'Update fieldset "Relazioni" in model "Media Foto" (`media_photo`)'
  );
  await client.fieldsets.update("LqqNcjKWR7Gev1Bg2AiRgQ", {
    collapsible: true,
    start_collapsed: true,
  });

  console.log(
    'Update DateTime field "Data di Creazione Media" (`creation_date`) in model "Media Video" (`media_video`)'
  );
  await client.fields.update(newFields["VXwtArjgQOWwX0kLiAnVmw"], {
    position: 7,
  });

  console.log(
    'Update fieldset "Relazioni" in model "Media Video" (`media_video`)'
  );
  await client.fieldsets.update("HqAjwoQ_Qm-PCB_cSGbmXQ", {
    collapsible: true,
    start_collapsed: true,
  });

  console.log(
    'Update Single-line string field "Titolo" (`title`) in model "Archivio Partner e Reti" (`pertners_networks_archive`)'
  );
  await client.fields.update("Eh4Qh41TTgqf-BV6OYgrew", {
    localized: true,
    default_value: { it: "", en: "" },
  });

  console.log(
    'Update Single-line string field "Titolo" (`title`) in model "Archivio Artisti e Compagnie" (`artists_companies_archive`)'
  );
  await client.fields.update("dLlHM8oISXKFmVISvKTK5Q", {
    localized: true,
    default_value: { it: "", en: "" },
  });

  console.log(
    'Update Single-line string field "Titolo" (`title`) in model "Archivio Timeline" (`years_archive`)'
  );
  await client.fields.update("eMIHB4RkScy51_ZwKwA8FA", {
    localized: true,
    default_value: { it: "", en: "" },
  });

  console.log(
    'Update Single-line string field "Titolo" (`title`) in model "Archivio Festival" (`festival_editions_archive`)'
  );
  await client.fields.update("JZEG-GWqTS6ssb4NiuJUTQ", {
    localized: true,
    default_value: { it: "", en: "" },
  });

  console.log("Finalize models/block models");

  console.log('Update model "Anno" (`year`)');

  try {
    const sortingField = await client.fields.find("year::year");
    console.log("sortingField", sortingField);
    await client.itemTypes.update("148638", {
      ordering_field: { id: sortingField.id, type: "field" },
    });
  } catch (e: any) {
    console.log("ERROR", e);
    let errors: any = e?.errors || [];
    errors.map((ee: any) => console.log(ee, ee.attributes));
  }

  console.log('Update model "Archivio Timeline" (`years_archive`)');
  await client.itemTypes.update("bu2ay-uHSpyiVfx-YFZ7Lw", {
    name: "Archivio Timeline",
  });

  console.log("Manage menu items");

  console.log('Create menu item "Festival"');
  newMenuItems["D-HKQZw_TCW0O9JMEP6f9w"] = await client.menuItems.create({
    label: "Festival",
  });

  console.log('Create menu item "Media"');
  newMenuItems["JHXwvy52R8WI-JMCFqcjdQ"] = await client.menuItems.create({
    label: "Media",
  });

  console.log('Create menu item "Residenze Artistiche"');
  newMenuItems["KkvrLNbHR2aWeHbGXQsV8Q"] = await client.menuItems.create({
    label: "Residenze Artistiche",
    item_type: { id: "DDWlLpgKTAW3x73tiHEZcA", type: "item_type" },
    parent: { id: "78653", type: "menu_item" },
  });

  try {
    console.log('Create menu item "Pagine"');
    newMenuItems["Kp6FMJTfQO2r8SDeVu88PQ"] = await client.menuItems.create({
      label: "Tutte le Pagine",
    });
  } catch (e: any) {
    console.log("ERROR", e);
    let errors: any = e?.errors || [];
    errors.map((ee: any) => console.log(ee, ee.attributes));
  }

  console.log('Create menu item "Compagnie"');
  newMenuItems["M0G7UKEvQCqiKbgtaSDdqw"] = await client.menuItems.create({
    label: "Compagnie",
    item_type: { id: "KXXcoWL1Toe-F_cHYSHO9Q", type: "item_type" },
    parent: { id: "78653", type: "menu_item" },
  });

  console.log('Create menu item "Edizioni Festival"');
  newMenuItems["IsAROrrYR_CdjCsRcW_kFA"] = await client.menuItems.create({
    label: "Edizioni Festival",
    item_type: { id: "NjpxmUkYTniNITef1nO64g", type: "item_type" },
    parent: newMenuItems["D-HKQZw_TCW0O9JMEP6f9w"],
  });

  console.log('Create menu item "Date Festival"');
  newMenuItems["NpUlc_xsSlOse-NKb-itgw"] = await client.menuItems.create({
    label: "Date Festival",
    item_type: { id: "148634", type: "item_type" },
    parent: newMenuItems["D-HKQZw_TCW0O9JMEP6f9w"],
  });

  console.log('Create menu item "Video"');
  newMenuItems["GgaXANBWRIaaAPLayRaogw"] = await client.menuItems.create({
    label: "Video",
    item_type: { id: "QrFc7IEHRFyMUgSNCaKi0Q", type: "item_type" },
    parent: newMenuItems["JHXwvy52R8WI-JMCFqcjdQ"],
  });

  console.log('Create menu item "Doc"');
  newMenuItems["LtQ2tucnS_GX23LeGTYCmQ"] = await client.menuItems.create({
    label: "Doc",
    item_type: { id: "IsKW8MWgS3yFV4HtkKVd4w", type: "item_type" },
    parent: newMenuItems["JHXwvy52R8WI-JMCFqcjdQ"],
  });

  console.log('Create menu item "Foto"');
  newMenuItems["SNF0M_utQ0We2QUUjAWh1g"] = await client.menuItems.create({
    label: "Foto",
    item_type: { id: "Ql0phGMFSlGCJOgdpP4PDA", type: "item_type" },
    parent: newMenuItems["JHXwvy52R8WI-JMCFqcjdQ"],
  });

  console.log('Create menu item "Audio"');
  newMenuItems["XCfGMxOdRlWtGOrF1Aw9Zw"] = await client.menuItems.create({
    label: "Audio",
    item_type: { id: "NSeQimtDTkmBg2-z_uU5-w", type: "item_type" },
    parent: newMenuItems["JHXwvy52R8WI-JMCFqcjdQ"],
  });

  console.log('Create menu item "Pagine Archivio"');
  newMenuItems["NcVBYkgfRVuIJDM3wX4Q_Q"] = await client.menuItems.create({
    label: "Pagine Archivio",
    parent: newMenuItems["Kp6FMJTfQO2r8SDeVu88PQ"],
  });

  console.log('Create menu item "Pagine indice"');
  newMenuItems["QQZ0zP_GQWGVKVPMIkYaJw"] = await client.menuItems.create({
    label: "Pagine indice",
    parent: newMenuItems["Kp6FMJTfQO2r8SDeVu88PQ"],
  });

  console.log('Create menu item "Archivio Timeline"');
  newMenuItems["BEm_zkddSVuEcSm6hFPipA"] = await client.menuItems.create({
    label: "Archivio Timeline",
    item_type: { id: "bu2ay-uHSpyiVfx-YFZ7Lw", type: "item_type" },
    parent: newMenuItems["NcVBYkgfRVuIJDM3wX4Q_Q"],
  });

  console.log('Create menu item "Archivio News e Pubblicazioni"');
  newMenuItems["EZHFrjDASnOXBM9ZOSu2oQ"] = await client.menuItems.create({
    label: "Archivio News e Pubblicazioni",
    item_type: { id: "HZcI0lIeRSuSJ4yvmyUaZQ", type: "item_type" },
    parent: newMenuItems["NcVBYkgfRVuIJDM3wX4Q_Q"],
  });

  console.log('Create menu item "Archivio Attivit\u00E0"');
  newMenuItems["HRrhiY3TQpuIo7vG9wF1aQ"] = await client.menuItems.create({
    label: "Archivio Attivit\u00E0",
    item_type: { id: "PwIjFzxsTbGhEYWRE81tUw", type: "item_type" },
    parent: newMenuItems["NcVBYkgfRVuIJDM3wX4Q_Q"],
  });

  console.log('Create menu item "Archivio Partner e Reti"');
  newMenuItems["IIwElWfFR7qfdLao9ujS4w"] = await client.menuItems.create({
    label: "Archivio Partner e Reti",
    item_type: { id: "WsUvFTfcTEOO13BLuKiv_Q", type: "item_type" },
    parent: newMenuItems["NcVBYkgfRVuIJDM3wX4Q_Q"],
  });

  console.log('Create menu item "Archivio Artisti e Compagnie"');
  newMenuItems["UNH3bfypTHWsMQeWl9Dw2Q"] = await client.menuItems.create({
    label: "Archivio Artisti e Compagnie",
    item_type: { id: "ZqV-AG7eQzGHCOa88xa4Zg", type: "item_type" },
    parent: newMenuItems["NcVBYkgfRVuIJDM3wX4Q_Q"],
  });

  console.log('Create menu item "Archivio Media"');
  newMenuItems["eBiRbeUeQvebmd_cmI1w7g"] = await client.menuItems.create({
    label: "Archivio Media",
    item_type: { id: "KCxx_3gSR5u8IA7GWPJQQg", type: "item_type" },
    parent: newMenuItems["NcVBYkgfRVuIJDM3wX4Q_Q"],
  });

  console.log('Create menu item "Archivio Festival"');
  newMenuItems["eisMVySoQ06nizbSrVq60A"] = await client.menuItems.create({
    label: "Archivio Festival",
    item_type: { id: "eLC8Gf-QQae58aqUTKQGjw", type: "item_type" },
    parent: newMenuItems["NcVBYkgfRVuIJDM3wX4Q_Q"],
  });

  console.log('Create menu item "Indice Reti"');
  newMenuItems["BLUQdROvQZKkIdqEfjb2CQ"] = await client.menuItems.create({
    label: "Indice Reti",
    item_type: { id: "CUux2iGnTK2g41tOglafpg", type: "item_type" },
    parent: newMenuItems["QQZ0zP_GQWGVKVPMIkYaJw"],
  });

  console.log('Create menu item "Indice Artisti"');
  newMenuItems["Fjg7tDzRTJSVl4OSyNiXUg"] = await client.menuItems.create({
    label: "Indice Artisti",
    item_type: { id: "XkZp3jEHQjCXKeeJhB14dQ", type: "item_type" },
    parent: newMenuItems["QQZ0zP_GQWGVKVPMIkYaJw"],
  });

  console.log('Create menu item "Indice Eventi"');
  newMenuItems["G5OTW2t-S_yl2eSHSQ1cXQ"] = await client.menuItems.create({
    label: "Indice Eventi",
    item_type: { id: "DM2WStdaT8qL-WLHhP7EFQ", type: "item_type" },
    parent: newMenuItems["QQZ0zP_GQWGVKVPMIkYaJw"],
  });

  console.log('Create menu item "Indice Residenze Artistiche"');
  newMenuItems["O29mTHkpT4CzH0PAnp1TJQ"] = await client.menuItems.create({
    label: "Indice Residenze Artistiche",
    item_type: { id: "L71UvjLzTmeVCG34mS-x1g", type: "item_type" },
    parent: newMenuItems["QQZ0zP_GQWGVKVPMIkYaJw"],
  });

  console.log('Create menu item "Indice Progetti"');
  newMenuItems["Pc5xFSgUReyqfqiYv49Mwg"] = await client.menuItems.create({
    label: "Indice Progetti",
    item_type: { id: "c_6EnUBxQwuzI4ev_bp8zQ", type: "item_type" },
    parent: newMenuItems["QQZ0zP_GQWGVKVPMIkYaJw"],
  });

  console.log('Create menu item "Indice Video"');
  newMenuItems["QhCawV9IS9SkwoKRpTz66g"] = await client.menuItems.create({
    label: "Indice Video",
    item_type: { id: "F0VZnL8VR3iIXeOWwLG3JQ", type: "item_type" },
    parent: newMenuItems["QQZ0zP_GQWGVKVPMIkYaJw"],
  });

  console.log('Create menu item "Indice Audio"');
  newMenuItems["ScmQDd50Tvub2mfKfHAoSw"] = await client.menuItems.create({
    label: "Indice Audio",
    item_type: { id: "XnfOAbpaRmShwS849Kpdog", type: "item_type" },
    parent: newMenuItems["QQZ0zP_GQWGVKVPMIkYaJw"],
  });

  console.log('Create menu item "Indice News"');
  newMenuItems["b0Ea34_lQi2-p7b69X3i0w"] = await client.menuItems.create({
    label: "Indice News",
    item_type: { id: "CSmPHaURTkq3rpwing7C0w", type: "item_type" },
    parent: newMenuItems["QQZ0zP_GQWGVKVPMIkYaJw"],
  });

  console.log('Delete menu item "Landing Pages"');
  await client.menuItems.destroy("78644");

  console.log('Delete menu item "Date Festival"');
  await client.menuItems.destroy("78645");

  console.log('Delete menu item "Categorie - Tag"');
  await client.menuItems.destroy("78646");

  console.log('Delete menu item "Alltre sezioni"');
  await client.menuItems.destroy("78649");

  console.log('Delete menu item "Schema migration"');
  await client.menuItems.destroy("788140");

  console.log('Update menu item "Anni"');
  await client.menuItems.update("78647", {
    label: "Anni",
    position: 0,
    parent: newMenuItems["D-HKQZw_TCW0O9JMEP6f9w"],
  });

  console.log('Update menu item "Workshop Categories"');
  await client.menuItems.update("788141", {
    position: 5,
    parent: { id: "78653", type: "menu_item" },
  });

  console.log('Update menu item "Testi per ThankYou Page acquisto biglietti"');
  await client.menuItems.update("78648", {
    label: "Testi per ThankYou Page acquisto biglietti",
    position: 10,
    parent: { id: "78653", type: "menu_item" },
  });

  console.log('Update menu item "Pagine"');
  await client.menuItems.update("78657", {
    position: 1,
    parent: newMenuItems["Kp6FMJTfQO2r8SDeVu88PQ"],
  });

  console.log('Update menu item "Homepage"');
  await client.menuItems.update("78658", {
    position: 0,
    parent: newMenuItems["Kp6FMJTfQO2r8SDeVu88PQ"],
  });

  console.log('Update menu item "Navigazione"');
  await client.menuItems.update("78656", { position: 11 });

  console.log('Update menu item "Indice News"');
  await client.menuItems.update(newMenuItems["b0Ea34_lQi2-p7b69X3i0w"], {
    position: 0,
  });

  console.log('Update menu item "Residenze Artistiche"');
  await client.menuItems.update(newMenuItems["KkvrLNbHR2aWeHbGXQsV8Q"], {
    position: 0,
  });

  console.log('Update menu item "Compagnie"');
  await client.menuItems.update(newMenuItems["M0G7UKEvQCqiKbgtaSDdqw"], {
    position: 1,
  });

  console.log('Update menu item "Archivio Festival"');
  await client.menuItems.update(newMenuItems["eisMVySoQ06nizbSrVq60A"], {
    position: 1,
  });

  console.log('Update menu item "Indice Reti"');
  await client.menuItems.update(newMenuItems["BLUQdROvQZKkIdqEfjb2CQ"], {
    position: 5,
  });

  console.log('Update menu item "Pagine"');
  await client.menuItems.update(newMenuItems["Kp6FMJTfQO2r8SDeVu88PQ"], {
    position: 13,
  });

  console.log('Update menu item "Progetti"');
  await client.menuItems.update("78642", { position: 6 });

  console.log('Update menu item "Reti"');
  await client.menuItems.update("101855", { position: 7 });

  console.log('Update menu item "Festival"');
  await client.menuItems.update(newMenuItems["D-HKQZw_TCW0O9JMEP6f9w"], {
    position: 12,
  });

  console.log('Update menu item "Archivio News e Pubblicazioni"');
  await client.menuItems.update(newMenuItems["EZHFrjDASnOXBM9ZOSu2oQ"], {
    position: 5,
  });

  console.log('Update menu item "Indice Residenze Artistiche"');
  await client.menuItems.update(newMenuItems["O29mTHkpT4CzH0PAnp1TJQ"], {
    position: 1,
  });

  console.log('Update menu item "Archivio Media"');
  await client.menuItems.update(newMenuItems["eBiRbeUeQvebmd_cmI1w7g"], {
    position: 3,
  });

  console.log('Update menu item "Doc"');
  await client.menuItems.update(newMenuItems["LtQ2tucnS_GX23LeGTYCmQ"], {
    position: 0,
  });

  console.log('Update menu item "Indice Progetti"');
  await client.menuItems.update(newMenuItems["Pc5xFSgUReyqfqiYv49Mwg"], {
    position: 3,
  });

  console.log('Update menu item "Audio"');
  await client.menuItems.update(newMenuItems["XCfGMxOdRlWtGOrF1Aw9Zw"], {
    position: 2,
  });

  console.log('Update menu item "Archivio Timeline"');
  await client.menuItems.update(newMenuItems["BEm_zkddSVuEcSm6hFPipA"], {
    position: 0,
  });

  console.log('Update menu item "Indice Eventi"');
  await client.menuItems.update(newMenuItems["G5OTW2t-S_yl2eSHSQ1cXQ"], {
    position: 4,
  });

  console.log('Update menu item "Archivio Attivit\u00E0"');
  await client.menuItems.update(newMenuItems["HRrhiY3TQpuIo7vG9wF1aQ"], {
    position: 2,
  });

  console.log('Update menu item "Date Festival"');
  await client.menuItems.update(newMenuItems["NpUlc_xsSlOse-NKb-itgw"], {
    position: 1,
  });

  console.log('Update menu item "Indice Audio"');
  await client.menuItems.update(newMenuItems["ScmQDd50Tvub2mfKfHAoSw"], {
    position: 6,
  });

  console.log('Update menu item "Archivio Artisti e Compagnie"');
  await client.menuItems.update(newMenuItems["UNH3bfypTHWsMQeWl9Dw2Q"], {
    position: 6,
  });

  console.log('Update menu item "Contenuti"');
  await client.menuItems.update("78653", { position: 14 });

  console.log('Update menu item "Indice Artisti"');
  await client.menuItems.update(newMenuItems["Fjg7tDzRTJSVl4OSyNiXUg"], {
    position: 2,
  });

  console.log('Update menu item "Video"');
  await client.menuItems.update(newMenuItems["GgaXANBWRIaaAPLayRaogw"], {
    position: 1,
  });

  console.log('Update menu item "Archivio Partner e Reti"');
  await client.menuItems.update(newMenuItems["IIwElWfFR7qfdLao9ujS4w"], {
    position: 4,
  });

  console.log('Update menu item "Pagine indice"');
  await client.menuItems.update(newMenuItems["QQZ0zP_GQWGVKVPMIkYaJw"], {
    position: 2,
  });

  console.log('Update menu item "Foto"');
  await client.menuItems.update(newMenuItems["SNF0M_utQ0We2QUUjAWh1g"], {
    position: 3,
  });
}
