$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "========================================="
Write-Host "01. BUILD LIBRARY"
Write-Host "========================================="

Write-Host ""
Write-Host ">>> Building libErpModular..."
ng build libErpModular --configuration production

Write-Host ""
Write-Host ">>> Creating npm package..."
Push-Location dist/lib-erp-modular

npm pack

Pop-Location

Write-Host ""
Write-Host ">>> Installing lib-erp-modular..."
npm install ./dist/lib-erp-modular/lib-erp-modular-0.0.1.tgz


Write-Host ""
Write-Host "========================================="
Write-Host "02. CLEAN DOCKER BUILDER CACHE"
Write-Host "========================================="

docker builder prune -a -f


Write-Host ""
Write-Host "========================================="
Write-Host "03. BUILD ANGULAR APPLICATIONS"
Write-Host "========================================="

Write-Host ""
Write-Host ">>> Building dashboard-mfe..."
ng build dashboard-mfe

Write-Host ""
Write-Host ">>> Building customer-mfe..."
ng build customer-mfe

Write-Host ""
Write-Host ">>> Building product-mfe..."
ng build product-mfe

Write-Host ""
Write-Host ">>> Building sale-mfe..."
ng build sale-mfe

Write-Host ""
Write-Host ">>> Building host..."
ng build host
if ($LASTEXITCODE -ne 0) {
    throw "Error building host"
}

Write-Host ""
Write-Host ">>> Replacing federation manifest for Docker..."

Copy-Item `
    .\projects\host\public\federation.manifest.docker.json `
    .\dist\host\browser\federation.manifest.json `
    -Force


Write-Host ""
Write-Host "========================================="
Write-Host "04. BUILD DOCKER IMAGES"
Write-Host "========================================="

Write-Host ""
Write-Host ">>> Building dashboard-mfe image..."
docker build --rm=true --no-cache `
    -t dashboard-mfe:1.0.0 `
    --build-arg APPLICATION=dashboard-mfe .

Write-Host ""
Write-Host ">>> Building customer-mfe image..."
docker build --rm=true --no-cache `
    -t customer-mfe:1.0.0 `
    --build-arg APPLICATION=customer-mfe .

Write-Host ""
Write-Host ">>> Building product-mfe image..."
docker build --rm=true --no-cache `
    -t product-mfe:1.0.0 `
    --build-arg APPLICATION=product-mfe .

Write-Host ""
Write-Host ">>> Building sale-mfe image..."
docker build --rm=true --no-cache `
    -t sale-mfe:1.0.0 `
    --build-arg APPLICATION=sale-mfe .

Write-Host ""
Write-Host ">>> Building host image..."
docker build --rm=true --no-cache `
    -t host:1.0.0 `
    --build-arg APPLICATION=host .


Write-Host ""
Write-Host "========================================="
Write-Host "05. DOCKER COMPOSE"
Write-Host "========================================="

Write-Host ""
Write-Host ">>> Starting containers..."

docker-compose up -d


Write-Host ""
Write-Host "========================================="
Write-Host "DEPLOY COMPLETED"
Write-Host "========================================="

Write-Host ""
Write-Host "Docker images:"
docker images | Select-String "dashboard-mfe|customer-mfe|product-mfe|sale-mfe|host"

Write-Host ""
Write-Host "Containers:"
docker-compose ps

Write-Host ""
Write-Host "Application available at:"
Write-Host "http://localhost:4200"
Write-Host ""
