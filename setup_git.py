import subprocess, os, sys

REPO_DIR = r'C:\Noahsmart\dashboard'
REMOTE   = 'https://github.com/g9269s-png/Test.git'
BRANCH   = 'main'

def run(cmd, check=False):
    r = subprocess.run(cmd, cwd=REPO_DIR, capture_output=True, text=True, encoding='utf-8')
    if r.stdout.strip():
        print(r.stdout.strip())
    if r.stderr.strip():
        print(r.stderr.strip())
    return r

print('=' * 50)
print('  GitHub 자동 연동 초기 설정')
print('=' * 50)

# 1. git 사용자 설정
print('\n[1/6] Git 사용자 설정...')
run(['git', 'config', '--global', 'user.email', 'g9269s@gmail.com'])
run(['git', 'config', '--global', 'user.name',  'g9269s-png'])
run(['git', 'config', '--global', 'credential.helper', 'manager'])
run(['git', 'config', '--global', 'init.defaultBranch', 'main'])
print('     완료')

# 2. git 저장소 초기화
print('\n[2/6] Git 저장소 초기화...')
if not os.path.isdir(os.path.join(REPO_DIR, '.git')):
    run(['git', 'init'])
    print('     초기화 완료')
else:
    print('     이미 초기화됨')

# 3. .gitignore
print('\n[3/6] .gitignore 생성...')
ignore = '\n'.join(['__pycache__/', '*.pyc', 'logo_b64.txt', 'chemical-dashboard/docs/'])
with open(os.path.join(REPO_DIR, '.gitignore'), 'w', encoding='utf-8') as f:
    f.write(ignore)
print('     완료')

# 4. 원격 저장소
print('\n[4/6] GitHub 원격 저장소 연결...')
run(['git', 'remote', 'remove', 'origin'])
run(['git', 'remote', 'add', 'origin', REMOTE])
print('     완료 ->', REMOTE)

# 5. 첫 커밋
print('\n[5/6] 파일 스테이징 및 커밋...')
run(['git', 'checkout', '-B', BRANCH])
run(['git', 'add', '-A'])
r = run(['git', 'commit', '-m', 'init: AX dashboard setup'])
if 'nothing to commit' in (r.stdout + r.stderr):
    print('     변경사항 없음 (기존 커밋 유지)')

# 6. push
print('\n[6/6] GitHub에 push 중...')
print('      * 브라우저에서 GitHub 로그인 창이 열릴 수 있습니다.')
r = run(['git', 'push', '-u', 'origin', BRANCH, '--force'])
if r.returncode == 0:
    print('\n' + '=' * 50)
    print('  설정 완료!')
    print(f'  이제 python gen_html.py 실행 시')
    print(f'  자동으로 GitHub에 push됩니다.')
    print('=' * 50)
else:
    print('\n[오류] push 실패.')
    print('  브라우저 로그인 창을 확인하거나')
    print('  이 스크립트를 다시 실행해 주세요.')
