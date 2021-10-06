declare global {
	namespace NodeJS {
		interface ProcessEnv {
			// APP
			APP_PORT: number;
			// Database
			POSTGRES_HOST: string;
			POSTGRES_PORT: number;
			POSTGRES_USER: string;
			POSTGRES_PASSWORD: string;
			POSTGRES_DATABASE: string;
		}
	}
}

export {};
