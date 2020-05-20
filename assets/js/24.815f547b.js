(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{478:function(e,t,a){"use strict";a.r(t);var n=a(43),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container"}},[e._v("#")]),e._v(" Container")]),e._v(" "),a("p",[e._v('Many people have heard of the container for a while or even use it every day. However, a question like "what is container" or "how container works" might still rise.')]),e._v(" "),a("p",[e._v("In this post, we will deep dive into the container.")]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("Before container era, we usually use visualization technology to limit and control system resources for the applications. However, it creates too much overhead on the physical machine. And thus, container as a lightweight solution emerged.")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("h3",{attrs:{id:"what-is-a-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-container"}},[e._v("#")]),e._v(" What is a container?")]),e._v(" "),a("p",[e._v("A container is a set of processes just like other processes you launched from the shell, except that it's being isolated in its "),a("a",{attrs:{href:"https://man7.org/linux/man-pages/man7/namespaces.7.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("namespace"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://man7.org/linux/man-pages/man7/cgroups.7.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("cgroups"),a("OutboundLink")],1),e._v(", and "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/UnionFS",target:"_blank",rel:"noopener noreferrer"}},[e._v("union filesystem"),a("OutboundLink")],1),e._v(". It has everything it needs in its isolation: code, runtime, system tools, system libraries, settings and so on.")]),e._v(" "),a("p",[e._v("Docker is the dominant container option. However, there're various competitors such as CoreOS rkt, Ubuntu LXD. People standardize the container into the "),a("a",{attrs:{href:"https://www.opencontainers.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OCI specs"),a("OutboundLink")],1),e._v(" and love to have various implementations.")]),e._v(" "),a("h3",{attrs:{id:"who-needs-a-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#who-needs-a-container"}},[e._v("#")]),e._v(" Who needs a container?")]),e._v(" "),a("p",[e._v("Almost everyone.")]),e._v(" "),a("h3",{attrs:{id:"why-need-a-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-need-a-container"}},[e._v("#")]),e._v(" Why need a container?")]),e._v(" "),a("ul",[a("li",[e._v("Container isolates physical resources such as CPU, memory, disk I/O and network from other containers.")]),e._v(" "),a("li",[e._v("Container isolates OS kernel resources such process id, mount points, user and group IDs from other containers.")]),e._v(" "),a("li",[e._v("Containers eliminates differences between development and staging environments and help reduce conflicts between teams running different software on the same infrastructure.")])]),e._v(" "),a("h2",{attrs:{id:"solutions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solutions"}},[e._v("#")]),e._v(" Solutions")]),e._v(" "),a("h3",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),a("p",[e._v("Docker is the dominant container technology in the industry. Check "),a("a",{attrs:{href:"https://docs.docker.com/engine/docker-overview/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Overview"),a("OutboundLink")],1),e._v(" for more information.")]),e._v(" "),a("h3",{attrs:{id:"coreos-rkt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#coreos-rkt"}},[e._v("#")]),e._v(" CoreOS rkt")]),e._v(" "),a("p",[e._v("CoreOS rkt is yet another application container engine. The advantage of rkt is its cloud-native nature. Check "),a("a",{attrs:{href:"https://coreos.com/rkt/",target:"_blank",rel:"noopener noreferrer"}},[e._v("A security-minded, standards-based container engine: rkt"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"lxc-lxd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lxc-lxd"}},[e._v("#")]),e._v(" LXC, LXD")]),e._v(" "),a("p",[e._v("LXC and LXD is system container engine.  It offers an environment as close as possible as the one you'd get from a VM but without the overhead that comes with running a separate kernel and simulating all the hardware. Check "),a("a",{attrs:{href:"https://linuxcontainers.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("linuxcontainer.org"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"oci"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oci"}},[e._v("#")]),e._v(" OCI")]),e._v(" "),a("p",[e._v("The Open Container Initiative or OCI develops specifications for standards on Operating System process and application containers. It defines two specs: the "),a("a",{attrs:{href:"https://github.com/opencontainers/runtime-spec",target:"_blank",rel:"noopener noreferrer"}},[e._v("Runtime Specification"),a("OutboundLink")],1),e._v(" and the "),a("a",{attrs:{href:"https://github.com/opencontainers/image-spec",target:"_blank",rel:"noopener noreferrer"}},[e._v("Image Specification"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"bocker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bocker"}},[e._v("#")]),e._v(" Bocker")]),e._v(" "),a("p",[e._v("Bocker is a container engine implemented in 100 lines of Bash code. It's mainly for education. Check "),a("a",{attrs:{href:"https://github.com/p8952/bocker",target:"_blank",rel:"noopener noreferrer"}},[e._v("p8952/bocker"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"inside-the-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inside-the-container"}},[e._v("#")]),e._v(" Inside the container")]),e._v(" "),a("p",[e._v("The way we start running a container can be explained in below bash code.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Prepare a hash. We need it to identify our container.")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("uuid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ps_'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("shuf")]),e._v(" -i "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("42002")]),e._v("-42254 -n "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('"')]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Prepare a root dir for all the containers.")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("btrfs_path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/var/bocker'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("cgroups")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'cpu,cpuacct,memory'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Prepare root filesystem based on the given `$image`.")]),e._v("\n$ btrfs subvolume snapshot "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$btrfs_path")]),e._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$image")]),e._v('"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$btrfs_path")]),e._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$uuid")]),e._v('"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /dev/null\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create a cgroup")]),e._v("\n$ cgcreate -g "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$cgroups")]),e._v(":/"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$uuid")]),e._v('"')]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Control cgroup resource")]),e._v("\n$ cgset -r cpu.shares"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("512")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$uuid")]),e._v('"')]),e._v("\n$ cgset -r memory.limit_in_bytes"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("512000000")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$uuid")]),e._v('"')]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Execute a given `$cmd` in the cgroup.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# We need to create a unique namespace for the command (unshare).")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# We also need to change the root directory (chroot).")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# We also need to mount the runtime (/proc).")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Logging is a bonus (tee).")]),e._v("\n$ cgexec -g "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$cgroups")]),e._v(":"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$uuid")]),e._v('"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ip")]),e._v(" netns "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" netns_"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$uuid")]),e._v('"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n                unshare -fmuip --mount-proc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chroot")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$btrfs_path")]),e._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$uuid")]),e._v('"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n                /bin/sh -c "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/bin/mount -t proc proc /proc && '),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$cmd")]),e._v('"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("2")]),e._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("&1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tee")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$btrfs_path")]),e._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$uuid")]),e._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$uuid")]),e._v('.log"')]),e._v("\n")])])]),a("p",[e._v("You don't necessarily need to remember all the commands above, since it's pointless if you aren't a container engine developer.")]),e._v(" "),a("p",[e._v("The container engine such as runC, rkt, lxc provides you a beautifully designed CLI that abstracts above process for you.")]),e._v(" "),a("p",[e._v("If you like reading Youtube video, Liz Rice just "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=8fi7uSYlOdc",target:"_blank",rel:"noopener noreferrer"}},[e._v("implemented the container"),a("OutboundLink")],1),e._v(" from scratch in 40 minutes.")]),e._v(" "),a("p",[e._v("Note: Above code is extracted from awesome "),a("a",{attrs:{href:"https://github.com/p8952/bocker/blob/b6653f6/bocker#L61-L90"}},[e._v("bocker")]),e._v(".")]),e._v(" "),a("p",[e._v("The container technology is not shiny new thing. It provides so much values by simply combining several old technologies: namespace, cgroups, and union filesystem.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/architecture/container-and-cgroups.html"}},[e._v("Container and cgroups")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/architecture/container-and-unshare.html"}},[e._v("Container and unshare")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/architecture/container-and-nsenter.html"}},[e._v("Container and nsenter")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/architecture/container-and-namespace.html"}},[e._v("Container and Namespace")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/architecture/container-and-unionfs.html"}},[e._v("Container and UnionFS")])],1)]),e._v(" "),a("h2",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),a("h3",{attrs:{id:"how-is-the-container-different-from-virtual-machine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-is-the-container-different-from-virtual-machine"}},[e._v("#")]),e._v(" How is the container different from virtual machine?")]),e._v(" "),a("p",[e._v("A container is one or more non-trivial Linux processes running on top of the Kernel. We isolate them via cgroups and namespace.")]),e._v(" "),a("p",[e._v("Virtual Machine is a set of processes with dependencies running on top of a guest OS kernel. The guest OS is pre-allocated with a fixed amount of CPU, memory on top of the hypervisor and host OS kernel.")]),e._v(" "),a("p",[e._v("So, with the container, you get less isolation but much lightweight. With the VM, you get more isolation but much heavier. (It's pretty straightforward, right? we need to spend extra memory for guest OS in the VM. Besides programs in different VMs don't share things at all and hence load more things into RAM.)")]),e._v(" "),a("p",[e._v("Some would even mix using VM and container.")]),e._v(" "),a("h3",{attrs:{id:"i-m-using-vagrant-should-i-switch-to-the-containers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-m-using-vagrant-should-i-switch-to-the-containers"}},[e._v("#")]),e._v(" I'm using Vagrant. Should I switch to the containers?")]),e._v(" "),a("p",[e._v("You shouldn't switch to the containers if you are managing virtual machines, as Vagrant is a virtual machine manager.")]),e._v(" "),a("p",[e._v("You should switch to the containers if you merely want to run applications.")]),e._v(" "),a("p",[e._v("For those OS that doesn't support the container, you might want to create a virtual machine via Vagrant first, and then run applications as containers in the virtual machine.")]),e._v(" "),a("h3",{attrs:{id:"how-does-the-container-communicate-to-the-outside-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-does-the-container-communicate-to-the-outside-world"}},[e._v("#")]),e._v(" How does the container communicate to the outside world?")]),e._v(" "),a("p",[e._v("You can use "),a("code",[e._v("docker cp foo.txt my container:/foo.txt")]),e._v(" to send file "),a("code",[e._v("foo.txt")]),e._v(" from the host into the container.")]),e._v(" "),a("p",[e._v("You can use "),a("code",[e._v("docker cp my container:/foo.txt foo.txt")]),e._v(" to send file "),a("code",[e._v("foo.txt")]),e._v(" from the container to the host. "),a("span",{staticStyle:{"font-size":"0.5em"}},[e._v("[Note 1]: This is supported in Docker 1.8.")])]),e._v(" "),a("p",[e._v("You can use "),a("code",[e._v("COPY ./foo.txt /app")]),e._v(" to package file "),a("code",[e._v("foo.txt")]),e._v(" into container image. However, this happens at the building stage.")]),e._v(" "),a("p",[e._v("You can attach a volume for the container when start running it, pretty much like "),a("code",[e._v("docker run -v $(pwd):/app mycontainer")]),e._v(". It allows file syncing via a shared directory.")]),e._v(" "),a("p",[e._v("You can expose a port for the container when start running it, pretty much like "),a("code",[e._v("docker run -p 8000:8000 mycontainer")]),e._v(". It allows other programs talking to "),a("code",[e._v("mycontainer")]),e._v(" by simply establishing a TCP connection.")]),e._v(" "),a("p",[e._v("Some solutions below are not recommended due to making things complicated.")]),e._v(" "),a("ul",[a("li",[e._v("Running "),a("code",[e._v("sshd")]),e._v(" in the container.")]),e._v(" "),a("li",[e._v("Running a static web server in the container.")])]),e._v(" "),a("p",[e._v("If you're intended to communicate from one container to another container, then you need sort of container orchestration tools. Check "),a("a",{attrs:{href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker-compose"),a("OutboundLink")],1),e._v(" if your case is in development mode. Check "),a("a",{attrs:{href:"https://kubernetes.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes"),a("OutboundLink")],1),e._v(" if your case is in production mode.")]),e._v(" "),a("h3",{attrs:{id:"where-does-the-base-os-exist-for-the-container-defined-in-dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-does-the-base-os-exist-for-the-container-defined-in-dockerfile"}},[e._v("#")]),e._v(" Where does the base OS exist for the container defined in "),a("code",[e._v("Dockerfile")]),e._v("?")]),e._v(" "),a("p",[e._v("The short answer is there is no such actual OS running but we provide files for the base OS.")]),e._v(" "),a("p",[e._v("Each command in "),a("code",[e._v("Dockerfile")]),e._v(" creates a new layer for the image. Each layer includes merely some static files.")]),e._v(" "),a("p",[e._v("The base OS defined in "),a("code",[e._v("Dockerfile")]),e._v(" ends with the necessary files for the designated OS to be packaged into a layer.")]),e._v(" "),a("p",[e._v("In the runtime, your process thinks itself running on a designated OS, however, it's an illusion. Your container really runs as one or more processes with a set of files from the filesystem generated by UnionFS.")]),e._v(" "),a("h3",{attrs:{id:"what-s-the-difference-between-image-and-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-s-the-difference-between-image-and-container"}},[e._v("#")]),e._v(" What’s the difference between image and container?")]),e._v(" "),a("p",[e._v("The image is a binary packaged with files and organized by layers.")]),e._v(" "),a("p",[e._v("The container is a runtime instance of the image. You can have various containers for one image.")]),e._v(" "),a("p",[e._v("You can check image via "),a("code",[e._v("docker images")]),e._v(", and check containers via "),a("code",[e._v("docker ps")]),e._v(". The command "),a("code",[e._v("docker run")]),e._v(" turns an image into a container.")]),e._v(" "),a("p",[e._v("The image v/s container is pretty much like the program v/s process.")]),e._v(" "),a("h3",{attrs:{id:"does-the-container-slow-down-the-performance-of-my-program"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#does-the-container-slow-down-the-performance-of-my-program"}},[e._v("#")]),e._v(" Does the container slow down the performance of my program?")]),e._v(" "),a("p",[e._v("Don't worry about that.")]),e._v(" "),a("h2",{attrs:{id:"best-practices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[e._v("#")]),e._v(" Best Practices")]),e._v(" "),a("h3",{attrs:{id:"keep-the-image-small"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keep-the-image-small"}},[e._v("#")]),e._v(" Keep the image small")]),e._v(" "),a("p",[e._v("Don’t start with a full OS as the base image if you don't need, instead, build the image from a small base OS such as alpine.")]),e._v(" "),a("p",[e._v("Declare unnecessary files in "),a("code",[e._v(".dockerignore")]),e._v(".")]),e._v(" "),a("p",[e._v("Use "),a("a",{attrs:{href:"https://docs.docker.com/develop/develop-images/multistage-build/",target:"_blank",rel:"noopener noreferrer"}},[e._v("multistage builds"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Start building from a base for building")]),e._v("\nFROM python:3.7 as base\nADD requirements.txt /requirements.txt\nRUN pip "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -r /requirements.txt\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Then, we start from a new base.")]),e._v("\nFROM python:3.7-alpine\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Finally, we copy things from previous stage into new base.")]),e._v("\nCOPY --from"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("base /usr/local /user/local\n\nCMD /usr/local/bin/myapp\n")])])]),a("p",[e._v("Use chaining commands to reduce image layers. And don't forget to do clean up works.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Not recommend.")]),e._v("\nRUN apk "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" packageA\nRUN apk "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" packageB\nRUN "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v("\nRUN makeinstall\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Recommend")]),e._v("\nRUN apk "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" --no-cache packageA packageB "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])]),a("p",[e._v("Check this topic in the awesome "),a("a",{attrs:{href:"https://docs.projectatomic.io/container-best-practices/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Container Best Practises"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"persist-data-via-volumes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#persist-data-via-volumes"}},[e._v("#")]),e._v(" Persist data via volumes")]),e._v(" "),a("p",[e._v("It’s okay to read & write files in the container for temporarily data processing. However, you should aware that any data in the container would be lost when it gets killed.")]),e._v(" "),a("p",[e._v("Attach volumes into the container whenever you want to persist data.")]),e._v(" "),a("p",[e._v("If the transaction is required, please, connect the container to a SQL database container. In this case, the SQL database container should attach volumes for persisting data and expose a port.")]),e._v(" "),a("h3",{attrs:{id:"choose-the-trusted-image-as-source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#choose-the-trusted-image-as-source"}},[e._v("#")]),e._v(" Choose the trusted image as source")]),e._v(" "),a("p",[e._v("The safest bet is to use your homemade Docker images or by using verified images, whenever possible.")]),e._v(" "),a("p",[e._v("Otherwise, some malicious bots might hack into your container cluster. Check "),a("a",{attrs:{href:"https://www.bleepingcomputer.com/news/security/17-backdoored-docker-images-removed-from-docker-hub/",target:"_blank",rel:"noopener noreferrer"}},[e._v("such reports"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"fun-facts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fun-facts"}},[e._v("#")]),e._v(" Fun Facts")]),e._v(" "),a("ul",[a("li",[e._v("Linux Kernel knows nothing about the container currently. All it knows are cgroups, processes, namespaces and so on.")]),e._v(" "),a("li",[e._v("Docker is not a shiny new technology. All the fundamental tools have been developed and improved for years. Docker implements a high-level API and calls the abstraction as the CONTAINER.")]),e._v(" "),a("li",[e._v("Docker used LXC as container engine but shifted to containerd & runC & libcontainer later.")]),e._v(" "),a("li",[e._v("Docker, Inc. had "),a("a",{attrs:{href:"https://chrisshort.net/docker-inc-is-dead/",target:"_blank",rel:"noopener noreferrer"}},[e._v("a tough year"),a("OutboundLink")],1),e._v(" in 2017. Docker-swarm didn't win the battle of the best container orchestration tool. Plus, not everyone understood the rollout of Moby.")]),e._v(" "),a("li",[e._v("With the wide adoption of the container, another battle for a better container orchestration tool was going on. It seems that Kubernetes has won the game. Will there be a better orchestration tool like "),a("code",[e._v("Nginx")]),e._v(" over "),a("code",[e._v("Apache")]),e._v("?")])]),e._v(" "),a("h2",{attrs:{id:"conclusions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusions"}},[e._v("#")]),e._v(" Conclusions")]),e._v(" "),a("p",[e._v("A container is merely an OS process, except that it's being isolated, secured, and limited. All values added to the process make the container the dominant technology in the cloud era.")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://jvns.ca/blog/2016/10/10/what-even-is-a-container/",target:"_blank",rel:"noopener noreferrer"}},[e._v("What even is container"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://man7.org/linux/man-pages/man1/unshare.1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Manpage: unshare"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://man7.org/linux/man-pages/man1/nsenter.1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Manpage: nsenter"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://man7.org/linux/man-pages/man7/namespaces.7.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Manpage: namespaces"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://man7.org/linux/man-pages/man7/cgroups.7.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Manpage: cgroups"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://blog.docker.com/2014/06/why-you-dont-need-to-run-sshd-in-docker/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Why do you need to run sshd in container"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://medium.com/@teddyking/linux-namespaces-850489d3ccf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linux namespaces"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/UnionFS",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wikipedia: UnionFS"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.docker.com/storage/storagedriver/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker: about storage driver"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://kjanshair.github.io/2017/07/04/Docker-Containers-vs-System-Processes/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Containers vs System Processes"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://terriblecode.com/blog/how-docker-images-work-union-file-systems-for-dummies/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How docker images work union file systems for dummies"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);