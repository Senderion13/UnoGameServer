FROM node
ENV NODE_ENV=development
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --development --silent && mv node_modules ../
COPY .env \
    package.json \
    nest-cli.json \
    tsconfig.json \
    package-lock.json \
    .prettierrc \
    ./

COPY src/ src/

EXPOSE 3000
RUN chown -R node /app
USER node
CMD ["npm", "start"]
