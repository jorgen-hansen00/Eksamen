import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "z0skifgr",
  dataset: "production",
  useCdn: true,
});
