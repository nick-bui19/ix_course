const { Storage } = require("@google-cloud/storage");

const storage = new Storage({
  projectId: "melodic-eye-426809-s0",
  keyFilename: "melodic-eye-426809-s0-50acc1aea8f6.json",
});

const uploadToFirebaseStorage = async (filepath, fileName) => {
  try {
    const gcs = storage.bucket("gs://blog-app-bucket-1");
    const storagepath = `blog-app-bucket-1/${fileName}`;

    const result = await gcs.upload(filepath, {
      destination: storagepath,
      public: true,
      metadata: {
        contentType: "application/plain", //application/csv for excel or csv file upload
      },
    });
    return result[0].metadata.mediaLink;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

const GoogleCloudService = {
  uploadToFirebaseStorage,
};

module.exports = GoogleCloudService;