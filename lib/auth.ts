import { NextAuthOptions, User, getServerSession } from "next-auth";

import GoogleProvider from "next-auth/providers/google";

export const authConfig: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
	],
	callbacks: {
		async jwt(token: string, user: string, account: any) {
			// Initial sign in
			if (account && user) {
				return {
					accessToken: account.accessToken,
					accessTokenExpires: Date.now() + account.expires_in * 1000,
					refreshToken: account.refresh_token,
					user,
				};
			}

			// Return previous token if the access token has not expired yet
			if (Date.now() < token.accessTokenExpires) {
				return token;
			}

			// Access token has expired, try to update it
			return refreshAccessToken(token);
		},
		async session(session, token) {
			if (token) {
				session.user = token.user;
				session.accessToken = token.accessToken;
				session.error = token.error;
			}

			return session;
		},
	},
};
