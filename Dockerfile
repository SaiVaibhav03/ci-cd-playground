FROM node:22-alpine
WORKDIR /app
COPY package*.json .
RUN npm install 
COPY . .
EXPOSE 3000 
CMD ["node", "src/server.js"]


#   Start building my image using this existing image as the foundation.
#   You have two choices:
#       Start from empty land → install OS → install Node.js → configure everything.
#       Buy a pre-built house that already has Node.js installed.
#           (or) 
#   Choose the base image that already contains the runtime environment my application needs, 
#   then add my application files and configuration on top of it to create a new image.