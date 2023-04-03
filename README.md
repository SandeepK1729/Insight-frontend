
## API Reference

### Datasets

| Request   | Route                                         | Action                    			|
| :-------- | :-------                                      | :--------------------     			|			
| GET       | ```https /api/datasets```                     | Get all datasets          			|
| POST      | ```https /api/datasets```                     | Upload a dataset          			|
| GET       | ```https /api/datasets/<int:dataset_id>```    | Get a specific dataset				| 
| PUT       | ```https /api/datasets/<int:dataset_id>```    | Full update of specific dataset      	| 
| PATCH     | ```https /api/datasets/<int:dataset_id>```    | Partial update of specific dataset    | 
| DELETE    | ```https /api/datasets/<int:dataset_id>```    | Delete specific dataset      			| 

### ModelFiles

| Request   | Route                                     | Action                    			|
| :-------- | :-------                                  | :--------------------     			|			
| GET       | ```https /api/models```                   | Get all saved models          		|
| POST      | ```https /api/models```                   | Train and save a model          		|
| GET       | ```https /api/models/<int:model_id>```    | Get info of specific saved model		| 
| PUT       | ```https /api/models/<int:model_id>```    | Modifies the specific saved model		| 
| PATCH     | ```https /api/models/<int:model_id>```    | Modifies the specific saved model		| 
| DELETE    | ```https /api/models/<int:model_id>```    | Delete specific saved model			| 

