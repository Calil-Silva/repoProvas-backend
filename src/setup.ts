import dotenv from 'dotenv';

interface EnvironmentPath {
  prod: string;
  dev: string;
}

const envPath = (environment: string): string => {
  const path: EnvironmentPath = {
    prod: '.env',
    dev: '.env.dev',
  };

  // @ts-ignore
  return path[environment];
};

dotenv.config({
  path: envPath(process.env.NODE_ENV),
});
