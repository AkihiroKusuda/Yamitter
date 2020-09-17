# Yamitter
コマンド，使い方をまとめておきます

## 最初にpullした後
```
$ docker-compose build
```
## 毎回pullした後
フロント
```
$ yarn install
```

バック
```
$ pip install -r requirements.txt
```

## buildしてup
```
$ docker-compose up --build
```

## フロントとバックの立ち上げ
```
$ docker-compose up -d
```
フロント
```
$ cd ./frontend
$ docker-compose exec vue sh
$ yarn run build
$ yarn run dev
```
バック
```
$ cd ./backend
$ docker-compose exec flask bash
$ python app.py
```
## docker containerの停止
```
$ docker-compose stop
```

## 全部のdocker containerを削除
```
$ docker rm $(docker ps -aq)
```

## Yarnで入れたパッケージを動かす
```
$ yarn run [package]
```

## git全般
不要なリモートブランチの削除
```
$ git fetch -p
```

## prettierで整形-->eslintで静的解析
```
$ prettier-eslint --write
```

## yarnの設定とか
```
/usr/src/app/frontend # 
```
