# Yamitter
コマンド，使い方をまとめておきます

## 最初にpullした後
`docker-compose build`

##フロントとバックの立ち上げ
```
docker-compose up -d
```
フロント
```
cd ./frontend
docker-compose exec vue /bin/sh
yarn run build
yarn run dev
```
バック
```
cd ./backend
docker-compose exec flask bash
python app.py
```
