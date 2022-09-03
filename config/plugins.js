module.exports = ({ env }) => ({
  // ...
  redis: {
    config: {
      connections: {
        default: {
          connection: env('REDIS_URL')
        },
      },
    },
  },
  "rest-cache": {
    config: {
      provider: { name: "redis" },
      strategy: {
        contentTypes: [
          { contentType: "api::about.about", hitpass: false },
          { contentType: "api::certification.certification", hitpass: false },
          { contentType: "api::education.education", hitpass: false },
          { contentType: "api::experience.experience", hitpass: false },
          { contentType: "api::experiencedetail.experiencedetail", hitpass: false },
          { contentType: "api::language.language", hitpass: false },
          { contentType: "api::media.media", hitpass: false },
          { contentType: "api::project.project", hitpass: false },
          { contentType: "api::skill.skill", hitpass: false },
        ],
        debug: true,
      },
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: true,
      defaultLimit: 10,
      maxLimit: 20,
      apolloServer: {
        tracing: true,
      },
    }
  }
  // ...
});
