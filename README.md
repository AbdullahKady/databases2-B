# Getting Started

Execute the data generating script by running the following command : 
```sh
$ node generate-data
```

This will generate 2 .csv files:

* **matches.csv** : Containing the cup_matches records (2680 records).
* **players.csv** : Containing the played_in records (2680 x 22 => 58,960 records).

> All the constraints preserved (no duplicate players per match, and match IDs are referenced successfully).

## Next steps: 
There is a **COPY** command in PostgreSQL to import records into a table from a CSV file, which is going to be the next step inshaAllah  