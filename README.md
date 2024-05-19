link หน้าเว็บ
http://4.144.137.65

ขั้นตอนการ Deploy
1.เตรียมไฟล์ใน github นี้
##docker
1.docker login
2.run docker build -t suwanun/kub-first-app .
3.run docker push suwanun/kub-first-app

##run terminal Power Shell
1 -> az login
2 -> az group create --name myResourceGroup --location southeastasia
3 -> az aks create --resource-group myResourceGroup --name myAKSCluster --node-count 2 --generate-ssh-keys

เข้า azure k8s cluster -> Apply yaml
รอจนเสร็จ
1 เข้า k8s cluster -> Services and ingresses ดูที่ backend เลือก ip จะเป็นหน้าเว็บที่เรารัน
