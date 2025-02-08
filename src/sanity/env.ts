export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-05'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "skwp1nzp1cGcrUCJ9phPqeoHWpffVzsNApZiYss9ureSQCRaBuP3mpPQZh7Yb5PAg6G31htyjbKnGnBPm7EaNFyJ8ftC6Bs3d3koZzP2CbbZojENTAuUgQtIdAxTUYBXXA1lmQGu0Lfb98INyAKLudYj2JpRM2cih7RNZLu53fl4VvxvD2Lx",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
