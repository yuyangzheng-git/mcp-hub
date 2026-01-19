#!/bin/bash
echo "🚀 开始部署 mcp-hub 到公网..."
echo ""
echo "选择部署方式:"
echo "1. Vercel (推荐)"
echo "2. Cloudflare Pages"
echo "3. Netlify"
echo ""
read -p "请选择 (1/2/3): " choice

case $choice in
  1)
    echo "📦 部署到 Vercel..."
    npx vercel --prod
    ;;
  2)
    echo "📦 部署到 Cloudflare Pages..."
    echo "请手动操作:"
    echo "1. 打开 https://dash.cloudflare.com/"
    echo "2. 进入 Pages → Create a project"
    echo "3. 选择 'Direct upload'"
    echo "4. 上传 dist 文件夹"
    ;;
  3)
    echo "📦 部署到 Netlify..."
    npx netlify deploy --prod --dir=dist
    ;;
esac
