FROM nginx:1.27.4-alpine
ARG APPLICATION
COPY nginx.conf /tmp/nginx.conf
COPY nginx-host.conf /tmp/nginx-host.conf

WORKDIR /usr/share/nginx/html

# Seleccionar configuración según la aplicación
RUN if [ "$APPLICATION" = "host" ]; then \
  cp /tmp/nginx-host.conf /etc/nginx/nginx.conf; \
  else \
  cp /tmp/nginx.conf /etc/nginx/nginx.conf; \
  fi \
  && rm /tmp/nginx.conf /tmp/nginx-host.conf


COPY dist/$APPLICATION/browser .
RUN ls -laR .
EXPOSE 80
