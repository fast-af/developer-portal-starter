# Direct Integration Validator
This tool will help sellers validate the api endpoints which they need to set up for Fast. This tool will allow making individual calls to Creat/Read/Update endpoints. We will add support for Delete endpoint very soon.

## Prerequisites

### Docker
1. You will need Docker to run the containers. You can download the latest version of Docker [here](https://www.docker.com/products/docker-desktop).
### Seller Server
2. A http server that can receive Fast APIs requests needs to be up.



## How to use

### End to End flows
This tool can automatically run a full end to end flow for different checkout scenarios

Currently we support the new user checkout flow, where a new user signs up for Fast.

#### New User Checkout
   ```shell
   docker run dhruvilpatel/direct-integration-validator:direct-integration-validator-image -api_host=<seller_server_url> -operation=new_user -product_id=<product_id>
   ```
Note: Product id is required for running a New User Checkout flow, and should be a product that exists on the backend.

### Manual Flows
This tool supports manually triggering the following workflow actions:
####1. Create Cart
   ```shell
   docker run dhruvilpatel/direct-integration-validator:direct-integration-validator-image -api_host=<seller_server_url> -operation=create_cart -product_id=<product_id>
   ```
   Note: Product id is required for running a Create Cart flow.  
####2. Read Cart
   ```shell
   docker run dhruvilpatel/direct-integration-validator:direct-integration-validator-image -api_host=<seller_server_url> -operation=read_cart -external_id=<external_id>
   ```
   Note: External id  is required for running a Read Cart flow. External id can be found in the response of Create Cart action. If you can not find it in Seller Server, you can enable logging response in this tool by setting logResponse flag to true.
####3. Update Bill To
   ```shell
   docker run dhruvilpatel/direct-integration-validator:direct-integration-validator-image -api_host=<seller_server_url> -operation=update_bill_to -order_id=<order_id>
   ```
   Note: Order id is required for running Update Bill To flow.
####4. Update Shipment Contact
   ```shell
   docker run dhruvilpatel/direct-integration-validator:direct-integration-validator-image -api_host=<seller_server_url> -operation=update_shipment_contact -order_id=<order_id>
   ```
Note: Order id is required for running Update Shipment Contact flow.
####5. Update Shipping Option
   ```shell
   docker run dhruvilpatel/direct-integration-validator:direct-integration-validator-image -api_host=<seller_server_url> -operation=update_shipping_option -order_id=<order_id> -shipping_option_id=<shipping_option_id>
   ```
Note: Order id and shipping option id are required for running Update Shipping Option flow.
####6. Convert Cart To Order
   ```shell
   docker run dhruvilpatel/direct-integration-validator:direct-integration-validator-image -api_host=<seller_server_url> -operation=convert_cart_to_order -order_id=<order_id>
   ```
Note: Order id is required for running Convert Cart To Order flow.
