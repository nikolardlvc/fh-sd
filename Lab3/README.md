# Lab 3

## Teil 1

In Teil 1 verwendet die docker-compose Datei die offiziellen Images.

```bash
cd Teil1
docker-compose up
```

## Teil 2

In Teil 2 verwendet die docker-compose Datei die von mir selbst erstellten Dockerfiles.

```bash
cd Teil2
docker-compose up
```

## Achtung

Es kann vorkommen das Mysql nicht starten will, falls das Volume wo die Daten gespeichert sind schon existiert oder initialisiert war. Also sicherheitshalber das Volume zuvor mit `docker volume rm [volume-name]` oder mit `docker-compose down -v` löschen.
