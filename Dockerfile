FROM loadimpact/k6
WORKDIR /app
COPY . .
ENTRYPOINT ["k6"]