const b64_not_found_image = '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'
export default b64_not_found_image
