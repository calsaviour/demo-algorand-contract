## Create python virtualenv
```
python3 -m venv contractsvenv
source contractsvenv/bin/activate
pip install py-algorand-sdk pyteal pytest
```

## Start Sandbox
```
./sandbox up
```

## Copy Teal to sandbox
```
./sandbox copyTo ../demo-algorand-contract/smart_contract/marketplace_approval.teal
./sandbox copyTo ../demo-algorand-contract/smart_contract/marketplace_clear.teal

ACCOUNT_ADDRESS=$(./sandbox goal account list | awk '{print $2}' | head -n)
echo $ACCOUNT_ADDRESS

./sandbox goal app create --creator ${ACCOUNT_ADDRESS} --approval-prog marketplace_approval.teal --clear-prog marketplace_clear.teal --note tutorial-marketplace:uv1 --global-byteslices 3 --global-ints 2 --local-byteslices 0 --local-ints 0 --app-arg str:TestName --app-arg str:TestImage --app-arg str:TestDescription --app-arg int:10000
```