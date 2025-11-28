import { v2 as cloudinary, UploadApiOptions } from 'cloudinary'
import { env } from './env'

export function ensureCloudinaryConfigured() {
  if (!env.CLOUDINARY_CLOUD_NAME || !env.CLOUDINARY_API_KEY || !env.CLOUDINARY_API_SECRET) return false
  cloudinary.config({
    cloud_name: env.CLOUDINARY_CLOUD_NAME,
    api_key: env.CLOUDINARY_API_KEY,
    api_secret: env.CLOUDINARY_API_SECRET,
    secure: true,
  })
  return true
}

export type CloudinaryPublicId = string

export function cloudinaryUrl(publicId: CloudinaryPublicId, options?: UploadApiOptions & { width?: number; height?: number; crop?: 'fill' | 'fit' | 'scale' | 'thumb' | 'crop'; format?: string }) {
  ensureCloudinaryConfigured()
  return cloudinary.url(publicId, {
    secure: true,
    transformation: [
      {
        width: options?.width,
        height: options?.height,
        crop: options?.crop,
      },
    ],
    format: options?.format,
  })
}

export async function uploadImageFromUrl(url: string, folder?: string) {
  ensureCloudinaryConfigured()
  return cloudinary.uploader.upload(url, { folder })
}

// Initialize on module load (safe on server). If not configured, we keep it silent.
void ensureCloudinaryConfigured()
