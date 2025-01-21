import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType("yoyo-blocks/heading-with-icon", {
  title: __("Heading with Icon", "YOYO-Tube"),
  icon: "admin-Customizer",
  category: "Heading_block",
  description: "This is a heading with icon.",
  example: {},
  edit() {
    return <div>Hello World, step 1 (from the editor).</div>;
  },

  save() {
    return <div>Hello World, step 1 (from the frontend).</div>;
  },
});
