## fase 1

npx datocms environments:fork primary-copy main

npx datocms migrations:new archiveStuff --autogenerate=archivio:primary-copy

npx datocms migrations:run --destination=main
npx datocms migrations:run --source=main --in-place

## fase 2

npx datocms migrations:new lastArchiveMods --autogenerate=archivio:main


npx datocms migrations:run --destination=dev
npx datocms migrations:run --source=dev --in-place
