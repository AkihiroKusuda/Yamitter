# Yamitter
コマンド，使い方をまとめておきます

## 最初にpullした後
```
$ docker-compose build
```
## パッケージのインストール
フロント
```
$ yarn install
```

バック
```
$ pip install -r requirements.txt
```
## docker
### buildしてup
```
$ docker-compose up --build
```
### フロントとバックの立ち上げ
```
$ docker-compose up
```
フロント
```
$ docker-compose exec vue sh
$ yarn run build
$ yarn run dev
```
バック
```
$ docker-compose exec flask bash
$ python app.py
```

### docker containerの停止
```
$ docker-compose stop
```

### 全部のdocker containerを削除
```
$ docker rm $(docker ps -aq)
```

## Yarnで入れたパッケージを動かす
```
$ yarn run [package]
```
### linterに合わせてfixする
```
$ yarn run lint --fix
```
### prettierで整形-->eslintで静的解析
```
$ yarn run prettier-eslint --write
```
## git全般
不要なリモートブランチの削除
```
$ git fetch -p
```


