import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {ActionCode} from 'src/app/configs/actionCode';
import {PageHeaderType} from '../../../share/components/page-header/page-header.component';
import {DeptObj} from '../../../core/services/types';
import {DeptManageService} from '../../../core/services/http/internal-manage/dept-manage.service';
import {DeptManageModalService} from '../../../widget/biz-widget/internal-manage/dept-manage/dept-manage.service';
import {ModalBtnStatus} from '../../../widget/base-modal';
import {NzModalService} from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-dept-manage',
  templateUrl: './dept-manage.component.html',
  styleUrls: ['./dept-manage.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeptManageComponent implements OnInit {
  pageHeaderInfo: Partial<PageHeaderType> = {
    title: '部门管理',
    breadcrumb: ['首页', '内部管理', '部门管理']
  };
  dataList: DeptObj[] = [];
  actionCodeObj = {
    add: ActionCode.RoleAdd
  };
  ids: number[] = [];

  constructor(private dataService: DeptManageService,
              private cdr: ChangeDetectorRef, private modalSrv: NzModalService,
              private modalService: DeptManageModalService) {
  }

  collapse(event: boolean, item: DeptObj): void {
    item.expand = event;
  }

  // 新增
  add(departmentGrade: number = 0, id: number = 0): void {
    this.modalService.show({nzTitle: '新增'}).subscribe(({modalValue, status}) => {
      if (status === ModalBtnStatus.Cancel) {
        return;
      }
      this.addEditData({...modalValue, ...{departmentGrade: departmentGrade + 1, fatherId: id}}, 'addDept');
    });
  }

  edit(id: number, departmentGrade: number): void {
    this.dataService.getDeptDetail(id).subscribe(res => {
      this.modalService.show({nzTitle: '编辑'}, res).subscribe(({modalValue, status}) => {
        if (status === ModalBtnStatus.Cancel) {
          return;
        }
        modalValue.id = id;
        modalValue.departmentGrade = departmentGrade;
        this.addEditData(modalValue, 'editDept');
      });
    });
  }


  addEditData(param: DeptObj, methodName: 'editDept' | 'addDept'): void {
    this.dataService[methodName](param).subscribe(() => {
      this.getDataList();
    });
  }

  dataAddExpandFn(dataList: DeptObj[]): DeptObj[] {
    dataList.forEach((item) => {
      item.expand = false;
      if (item.departmentVos && item.departmentVos.length > 0) {
        this.dataAddExpandFn(item.departmentVos);
      }
    });
    return dataList;
  }

  dataAddExpand(dataList: DeptObj[]): DeptObj[] {
    return this.dataAddExpandFn(dataList);
  }

  getDataList(): void {
    this.dataList = [
      {
        id: 1, departmentName: '一级部门1', departmentDesc: '描述1', fatherId: 0, departmentGrade: 1, departmentVos: [{
          id: 100, departmentName: '一级部门子1', departmentDesc: '描述1', fatherId: 1, departmentGrade: 2, departmentVos: [], expand: false
        }], expand: false
      },
      {id: 2, departmentName: '一级部门2', departmentDesc: '描述2', fatherId: 0, departmentGrade: 1, departmentVos: [], expand: false}

    ];
  }

  getDeptChildIds(deptArray: DeptObj[]): void {
    deptArray.forEach((item) => {
      this.ids.push(item.id);
      if (item.departmentVos && item.departmentVos.length > 0) {
        this.getDeptChildIds(item.departmentVos);
      }
    });
  }

  del(id: number, childArray: DeptObj[]): void {
    this.modalSrv.confirm({
      nzTitle: '确定要删除吗？',
      nzContent: '删除后不可恢复',
      nzOnOk: () => {
        this.ids = [];
        this.ids.push(id);
        this.getDeptChildIds(childArray);
        this.dataService.delDept(this.ids).subscribe(() => {
          this.getDataList();
        });
      }
    });
  }

  ngOnInit(): void {
    this.getDataList();
  }

}
