const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "mememachine-api-dev-attachmentsbucket-x331b09lo6fw"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://8cx9f6uzc0.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Pl5rLCZiY",
    APP_CLIENT_ID: "f5kisd1rbcfnuo17ktuqv7f1m",
    IDENTITY_POOL_ID: "us-east-1:952eb032-d839-4625-a461-826359814b0b"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "mememachine-api-prod-attachmentsbucket-4hlktks79ncc"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://7ck6kcqdjj.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_t0NrbLTta",
    APP_CLIENT_ID: "1hje7fjskge21dj0gnj30qa49v",
    IDENTITY_POOL_ID: "us-east-1:1eff7695-74b2-4859-a3f7-d56c99ad873e"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};