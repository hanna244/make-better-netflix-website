# Git Essentials

자주 사용되는 Git 명령어를 정리합니다.

<br/>

## Configure

### 글로벌 계정 이름, 이메일 등록

```sh
$ git config --global user.name <계정_이름>
$ git config --global user.email <가입한_이메일_주소>
```

### 글로벌 계정 이름, 이메일 출력

```sh
$ git config --global --get user.name
$ git config --global --get user.email
```

### Git 구성 파일 편집

```sh
$ git config --global -e
```

### VS Code를 사용해 구성 파일 편집

`code` 명령을 사용해 Git 구성 파일을 열고 수정, 저장

```sh
$ code ~/.gitconfig
```

<br/>

## Init/Clone

### Git 초기화

```sh
$ git init
```

### 원격 저장소 복제

```sh
$ git clone <원격_저장소_URL>
```

<br/>

## Add/Commit

### 변경 이력 추가

```sh
$ git add .
```

### 변경 이력 커밋

```sh
$ git commit -m "커밋 메시지"
```

<br/>

## Push

### 원격 저장소에 푸시

```sh
$ git push <원격_저장소_별칭> <브랜치_이름>
```

업스트림 설정 시 `-u` 옵션 플래그 사용

```sh
# -u, --set-upstream → git pull/status에 대한 업스트림을 설정합니다.
$ git push -u <원격_저장소_별칭> <브랜치_이름>
```

오류가 발생한 경우, `-f` 옵션 플래그를 사용해 강제 푸시 설정 가능

```sh
# -f, --force → 강제로 업데이트
$ git push -f <원격_저장소_별칭> <브랜치_이름>
```

<br/>

## Fetch/Merge 또는 Pull

### 원격 저장소 최신 변경이력 패치 후, 병합

```sh
$ git fetch 
$ git merge
```

### 원격 저장소 최신 변경이력 풀

```sh
$ git pull 
```

<br/>

## Reset

변경 이력을 되돌리되, 사용되는 옵션에 따라 완전히 제거될 수 있으니 사용에 주의가 필요합니다.

### 이전 커밋으로 리셋

2단계 이전 커밋으로 리셋

```sh
$ git reset HEAD~2
```

2단계 이전 커밋으로 리셋 (변경 이력 모두 제거)

```sh
$ git reset --hard HEAD~2
```

2단계 이전 커밋으로 리셋 (변경 이력 보존)

```sh
$ git reset --soft HEAD~2
```

<br/>

## Revert

`reset`과 달리 `revert`는 기존 커밋 위에 되돌린 커밋을 추가하여 커밋 히스토리에 반영됩니다.

## 커밋 되돌리기

2단계 이전 커밋으로 리셋

```sh
$ git revert HEAD~2
```

되돌린 커밋만큼 커밋 기록을 안 남기려면 `--no-commit` 옵션 플래그 사용

```sh
$ git revert --no-commit HEAD~2
```

<br/>

## Branch

### 로컬 브랜치 생성

```sh
$ git branch <새_브랜치_이름>
```

### 로컬 브랜치 이름 변경

```sh
$ git branch -m <브랜치_이름> <변경_브랜치_이름>
```

### 로컬 브랜치 삭제

```sh
$ git branch -d <브랜치_이름>
```

### 로컬 브랜치 목록 출력

```sh
# -l, --list → 브랜치 이름 목록을 표시합니다.
$ git branch -l
```

### 브랜치 변경

```sh
$ git checkout <브랜치_이름>
```

### 원격 브랜치 목록 출력

```sh
# -r, --remotes → 리모트 추적 브랜치에 대해 동작합니다.
$ git branch -r
```

### 원격 저장소의 브랜치로 변경

```sh
# -t, --track → 새 브랜치에 대한 업스트림 정보를 설정합니다.
$ git checkout -t <원격_저장소>/<브랜치_이름>
```

### 원격 저장소의 브랜치 삭제

```sh
# git push origin -d confirm
$ git push <원격_저장소_별칭> -d <브랜치_이름>
```

<br/>

## Checkout

### 이전 버전으로 돌아가기

이전 4단계 뒤로 체크아웃(돌아가기)

```sh
$ git checkout HEAD~4
```

### 특정 커밋으로 돌아가기

특정 커밋(`3664ebf`)으로 체크아웃

```sh
$ git checkout 3664ebf
```

### 현재 버전으로 되돌아 오기

현재 브랜치(`master` 등)로 체크아웃

```sh
# 현재 브랜치로 되돌아 오기
$ git checkout <브랜치_이름> 
```

<br/>

## Stash

## 작업 중인 상태에서 브랜치 이동하기

```sh
git stash
```

## 스태시 저장

```sh
git stash save "스태시 설명"
```

## 마지막 스태시 불러오기

```sh
git stash pop
```

## 스태시 목록 출력하기

```sh
git stash list
```