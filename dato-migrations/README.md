npx datocms environments:fork primary-copy main

npx datocms migrations:new archiveStuff --autogenerate=archivio:primary-copy

npx datocms migrations:run --destination=main
npx datocms migrations:run --source=main --in-place
