ARG BASE_IMAGE=node:16-bullseye
FROM ${BASE_IMAGE}

ENV NPM_CACHE "/app/.npm-cache"

RUN set -ex \
    ## update packages and install deps / usefull tools
    && apt-get update && apt-get install -y \
        wget \
        nano \
        curl \
        git \
    ## setup npm to place cache under moint point (easy reuse in dev)
    && npm set cache ${NPM_CACHE}

## Mountpoint for App Source
VOLUME /app

## Set Default Workdir
WORKDIR /app

CMD /bin/bash
