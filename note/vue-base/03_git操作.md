# 版本控制Git
## 命令
### 基本操作
    初始化远程仓库：github远程图形化界面操作
    初始化本地仓库:git init
                在对应的项目目录下运行
    将仓库文件加入到暂存区：git add ./            
    查看仓库文件状态：git status      
    将文件提交到本地版本库： git commit -m 'msg'
### 远程操作
     关联本地仓库与远程仓库
        git remote add <shortname> <url>         
     将本地库推到远程:
        git push [remote-name] [branch-name]
### 分支操作-1
     新建一个分支并同时切换到那个分支上
        git checkout -b [branch-name]  
     切换分支
       git checkout  [branch-name] 
     将分支推送到远程
        git push [remote-name] [branch-name] 
### 分支操作-2        
     合并分支
        到父分支上 git merge [branch-name]  
     查看本地分支
        git branch   
     查看完整的分支图
        git log --oneline --decorate --graph --all   
### 成员操作
      成员克隆项目 
        git clone url        
      成员创建分支跟踪远程分支(master分支不用创建)
        git checkout -b [branch] [remotename]/[branch]
      成员拉取数据(对应分支)
        git pull  
        


      
