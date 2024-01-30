FROM node
ENV NODE_ENV=development
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --development --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /app
USER node
CMD ["npm", "start"]
