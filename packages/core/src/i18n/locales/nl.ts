import type { Dictionary } from "../dictionary";

export const nl: Dictionary = {
  slash_menu: {
    heading: {
      title: "Kop 1",
      subtext: "Gebruikt voor een hoofdkop",
      aliases: ["h", "kop1", "h1"],
      group: "Koppen",
    },
    heading_2: {
      title: "Kop 2",
      subtext: "Gebruikt voor belangrijke secties",
      aliases: ["h2", "kop2", "subkop"],
      group: "Koppen",
    },
    heading_3: {
      title: "Kop 3",
      subtext: "Gebruikt voor subsecties en groepskoppen",
      aliases: ["h3", "kop3", "subkop"],
      group: "Koppen",
    },
    numbered_list: {
      title: "Genummerde Lijst",
      subtext: "Gebruikt om een genummerde lijst weer te geven",
      aliases: ["ol", "li", "lijst", "genummerdelijst", "genummerde lijst"],
      group: "Basisblokken",
    },
    bullet_list: {
      title: "Puntenlijst",
      subtext: "Gebruikt om een ongeordende lijst weer te geven",
      aliases: ["ul", "li", "lijst", "puntenlijst", "punten lijst"],
      group: "Basisblokken",
    },
    paragraph: {
      title: "Paragraaf",
      subtext: "Gebruikt voor de hoofdtekst van uw document",
      aliases: ["p", "paragraaf"],
      group: "Basisblokken",
    },
    table: {
      title: "Tabel",
      subtext: "Gebruikt voor tabellen",
      aliases: ["tabel"],
      group: "Geavanceerd",
    },
    image: {
      title: "Afbeelding",
      subtext: "Voeg een afbeelding in",
      aliases: [
        "afbeelding",
        "imageUpload",
        "upload",
        "img",
        "foto",
        "media",
        "url",
        "drive",
        "dropbox",
      ],
      group: "Media",
    },
    // TODO
    video: {
      title: "Video",
      subtext: "Insert a video",
      aliases: [
        "video",
        "videoUpload",
        "upload",
        "mp4",
        "film",
        "media",
        "url",
        "drive",
        "dropbox",
      ],
      group: "Media",
    },
    audio: {
      title: "Audio",
      subtext: "Insert audio",
      aliases: [
        "audio",
        "audioUpload",
        "upload",
        "mp3",
        "sound",
        "media",
        "url",
        "drive",
        "dropbox",
      ],
      group: "Media",
    },
    file: {
      title: "File",
      subtext: "Insert a file",
      aliases: ["file", "upload", "embed", "media", "url"],
      group: "Media",
    },
  },
  placeholders: {
    default: "Voer tekst in of type '/' voor commando's",
    heading: "Kop",
    bulletListItem: "Lijst",
    numberedListItem: "Lijst",
  },
  // TODO
  file_blocks: {
    image: {
      add_button_text: "Add image",
    },
    video: {
      add_button_text: "Add video",
    },
    audio: {
      add_button_text: "Add audio",
    },
    file: {
      add_button_text: "Add file",
    },
  },
  // from react package:
  side_menu: {
    add_block_label: "Nieuw blok",
    drag_handle_label: "Open blok menu",
  },
  drag_handle: {
    delete_menuitem: "Verwijder",
    colors_menuitem: "Kleuren",
  },
  table_handle: {
    delete_column_menuitem: "Verwijder kolom",
    delete_row_menuitem: "Verwijder rij",
    add_left_menuitem: "Voeg kolom links toe",
    add_right_menuitem: "Voeg kolom rechts toe",
    add_above_menuitem: "Voeg rij boven toe",
    add_below_menuitem: "Voeg rij onder toe",
  },
  suggestion_menu: {
    no_items_title: "Geen items gevonden",
    loading: "Laden…",
  },
  color_picker: {
    text_title: "Tekst",
    background_title: "Achtergrond",
    colors: {
      default: "Standaard",
      gray: "Grijs",
      brown: "Bruin",
      red: "Rood",
      orange: "Oranje",
      yellow: "Geel",
      green: "Groen",
      blue: "Blauw",
      purple: "Paars",
      pink: "Roze",
    },
  },
  formatting_toolbar: {
    bold: {
      tooltip: "Vet",
      secondary_tooltip: "Mod+B",
    },
    italic: {
      tooltip: "Cursief",
      secondary_tooltip: "Mod+I",
    },
    underline: {
      tooltip: "Onderstrepen",
      secondary_tooltip: "Mod+U",
    },
    strike: {
      tooltip: "Doorstrepen",
      secondary_tooltip: "Mod+Shift+X",
    },
    code: {
      tooltip: "Code",
      secondary_tooltip: "",
    },
    colors: {
      tooltip: "Kleuren",
    },
    link: {
      tooltip: "Maak link",
      secondary_tooltip: "Mod+K",
    },
    file_caption: {
      tooltip: "Bewerk onderschrift",
      input_placeholder: "Bewerk onderschrift",
    },
    // TODO
    file_replace: {
      tooltip: {
        image: "Replace image",
        video: "Replace video",
        audio: "Replace audio",
        file: "Replace file",
      },
    },
    file_rename: {
      tooltip: {
        image: "Rename image",
        video: "Rename video",
        audio: "Rename audio",
        file: "Rename file",
      },
      input_placeholder: {
        image: "Rename image",
        video: "Rename video",
        audio: "Rename audio",
        file: "Rename file",
      },
    },
    file_download: {
      tooltip: {
        image: "Download image",
        video: "Download video",
        audio: "Download audio",
        file: "Download file",
      },
    },
    file_delete: {
      tooltip: {
        image: "Delete image",
        video: "Delete video",
        audio: "Delete audio",
        file: "Delete file",
      },
    },
    file_preview_toggle: {
      tooltip: "Toggle preview",
    },
    nest: {
      tooltip: "Nest blok",
      secondary_tooltip: "Tab",
    },
    unnest: {
      tooltip: "Ontnest blok",
      secondary_tooltip: "Shift+Tab",
    },
    align_left: {
      tooltip: "Tekst links uitlijnen",
    },
    align_center: {
      tooltip: "Tekst centreren",
    },
    align_right: {
      tooltip: "Tekst rechts uitlijnen",
    },
    align_justify: {
      tooltip: "Tekst uitvullen",
    },
  },
  file_panel: {
    upload: {
      title: "Upload",
      // TODO
      file_placeholder: {
        image: "Upload image",
        video: "Upload video",
        audio: "Upload audio",
        file: "Upload file",
      },
      upload_error: "Fout: Upload mislukt",
    },
    embed: {
      title: "Insluiten",
      // TODO
      embed_button: {
        image: "Embed image",
        video: "Embed video",
        audio: "Embed audio",
        file: "Embed file",
      },
      url_placeholder: "Voer URL in",
    },
  },
  link_toolbar: {
    delete: {
      tooltip: "Verwijder link",
    },
    edit: {
      text: "Bewerk link",
      tooltip: "Bewerk",
    },
    open: {
      tooltip: "Open in nieuw tabblad",
    },
    form: {
      title_placeholder: "Bewerk titel",
      url_placeholder: "Bewerk URL",
    },
  },
  generic: {
    ctrl_shortcut: "Ctrl",
  },
};
