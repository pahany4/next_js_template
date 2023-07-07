import {buildImageUrl} from "cloudinary-build-url";


export const src_cloudinary = (
  {
    url,
    type = "scale",
    width,
    height,
    quality = 70,
    format = "webp",
  }
) => buildImageUrl(url, {
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  },
  transformations: {
    resize: {
      type: type,
      width: width,
      height: height,
    },
    quality: quality,
    format: format,
  }
})