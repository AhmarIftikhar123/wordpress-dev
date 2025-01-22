import { RichText, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, RadioControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { getIconComponent } from "./icons-map";

/**
 * Edit function for the heading with icon block.
 *
 * This function renders a `div.yoyo-icon-heading` element with two children:
 *
 * - A `span.yoyo-icon-heading__icon` element (a placeholder for the icon).
 * - A `RichText` component for the heading content. The `onChange` callback
 *   updates the block's `content` attribute with the new heading content using
 *   `props.setAttributes`.
 *
 * @param {Object} pros - Component props.
 * @param {string} pros.attributes.content - The heading content.
 * @param {string} pros.className - The block class name.
 * @param {Function} pros.setAttributes - is used to update the block's state.
 *
 * @return {WPElement} Element to render.
 */

const Edit = (pros) => {
  const { content, option } = pros.attributes; // Extract content from attributes

  const HeadingIcon = getIconComponent(option);
  console.log("Pros Info", option, HeadingIcon); // Debugging output

  return (
    <div className="yoyo-icon-heading">
      {/* Icon placeholder */}
      <span className="yoyo-icon-heading__heading">
        <HeadingIcon />
      </span>
      {/* Editable heading */}
      <RichText
        tagName="h4"
        className={pros.className}
        value={content}
        onChange={(newContent) => pros.setAttributes({ content: newContent })}
        placeholder={__("Heading...", "YOYO-Tube")} // Translation text domain
      />
      <InspectorControls>
        <PanelBody title={__("Icon", "YOYO-Tube")}>
          <RadioControl
            label={__("Select The Icon", "YOYO-Tube")}
            help={__("Control The Icon Selection", "YOYO-Tube")}
            options={[
              { label: __("DO'S", "YOYO-Tube"), value: "DOS" },
              { label: __("DONT'S", "YOYO-Tube"), value: "DONTS" },
            ]}
            selected={pros.attributes.option}
            onChange={(value) => pros.setAttributes({ option: value })}
          />
        </PanelBody>
      </InspectorControls>
    </div>
  );
};

export default Edit;
