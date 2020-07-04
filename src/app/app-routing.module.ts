import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'livestream',
    loadChildren: () => import('./livestream/livestream.module').then( m => m.LivestreamPageModule)
  },
  {
    path: 'explore',
    loadChildren: () => import('./onexplore/onexplore.module').then( m => m.OnexplorePageModule)
  },
  {
    path: 'stream-update',
    loadChildren: () => import('./stream-update/stream-update.module').then( m => m.StreamUpdatePageModule)
  },
  {
    path: 'newlivestream',
    loadChildren: () => import('./newlivestream/newlivestream.module').then( m => m.NewlivestreamPageModule)
  }
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
