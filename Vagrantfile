Vagrant.configure("2") do |o|
  o.vm.box = "precise32"
  o.vm.box_url = "http://files.vagrantup.com/precise32.box"
  o.vm.synced_folder "./dist", "/var/www/", create:true
  o.vm.network :private_network, ip: "182.168.55.55"
  o.vm.provision :shell, :path=> "Setup/setup.sh"
end